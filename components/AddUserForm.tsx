import { useRouter } from "next/router";
import { Button, Divider, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormErrorMessage from "../components/FormErrorMessage";
import { UserCreate } from "../models/types";

const UserSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  name: Yup.string()
    .min(3, "Mínimo 3 caracteres")
    .max(25, "Máximo 25 caracteres")
    .required("Campo obrigatório"),
});

export default function AddUserForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
    },
    validationSchema: UserSchema,
    onSubmit: async (userData: UserCreate) => {
      await fetch("/api/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }).then((res) => {
        if (res.status === 201) {
          router.push("/");
        } else {
          console.log(res);
          alert("Erro ao cadastrar usuário");
        }
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
        Adicionar Usuário
      </Typography>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <TextField
        id="email"
        label="Email"
        fullWidth
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        autoComplete="off"
      />
      {formik.errors.email && formik.touched.email ? (
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      ) : null}
      <TextField
        id="name"
        label="Nome do usuário"
        fullWidth
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        autoComplete="off"
        sx={{ mt: 2 }}
      />
      {formik.errors.name && formik.touched.name ? (
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
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
