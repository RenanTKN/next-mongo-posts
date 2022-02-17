import { useRouter } from "next/router";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { Types } from "mongoose";
import * as Yup from "yup";

import { CreatePost, User } from "../models/types";
import FormErrorMessage from "./FormErrorMessage";

const PostSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Mínimo 3 caracteres")
    .max(40, "Máximo 40 caracteres")
    .required("Campo obrigatório"),
  content: Yup.string()
    .min(3, "Mínimo 3 caracteres")
    .max(200, "Máximo 200 caracteres")
    .required("Campo obrigatório"),
  author: Yup.string().required("Campo obrigatório"),
});

interface AddPostFormProps {
  users: User[];
}

export default function AddPostForm({ users }: AddPostFormProps) {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      author: "",
    },
    validationSchema: PostSchema,
    onSubmit: async (values: CreatePost) => {
      const { author } = formik.values;
      const postData = {
        ...values,
        author: new Types.ObjectId(author as string),
      };
      console.log(postData);
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }).then((res) => {
        if (res.status === 201) {
          router.push("/");
        } else {
          console.log(res);
          alert("Erro ao criar post");
        }
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
        Adicionar Post
      </Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <TextField
        id="title"
        label="Título"
        fullWidth
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
        autoComplete="off"
      />
      {formik.errors.title && formik.touched.title ? (
        <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
      ) : null}
      <TextField
        id="content"
        label="Post"
        fullWidth
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.content}
        autoComplete="off"
        multiline
        rows={5}
        sx={{ mt: 2 }}
      />
      {formik.errors.content && formik.touched.content ? (
        <FormErrorMessage>{formik.errors.content}</FormErrorMessage>
      ) : null}
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel id="author-label">Autor</InputLabel>
        <Select
          labelId="author-label"
          id="author"
          name="author"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author}
          label="Age"
        >
          {users.map((user) => (
            <MenuItem value={user._id} key={user._id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {formik.errors.author && formik.touched.author ? (
        <FormErrorMessage>{formik.errors.author}</FormErrorMessage>
      ) : null}
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt: 3 }}
      >
        Salvar
      </Button>
    </form>
  );
}
