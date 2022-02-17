import React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";

import { Post, User } from "../models/types";
import Link from "./Link";

interface UsersProps {
  list: User[];
}

const Row = (props: { user: User }) => {
  const { user } = props;
  const [open, setOpen] = React.useState(false);
  const posts = user.posts as unknown as Post[];

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Link href={`/users/${user._id}`}>{user.name}</Link>
        </TableCell>
        <TableCell align="right">{user.email}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {posts.length ? (
                <>
                  <Typography variant="h6" gutterBottom component="div">
                    Posts
                  </Typography>
                  <Table size="small" aria-label="posts">
                    <TableHead>
                      <TableRow>
                        <TableCell>Título</TableCell>
                        <TableCell>Conteúdo</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {posts.map((post) => (
                        <TableRow key={post.title}>
                          <TableCell component="th" scope="row">
                            <Link href={`/posts/${post._id}`}>
                              {post.title}
                            </Link>
                          </TableCell>
                          <TableCell>{post.content}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              ) : (
                <Typography variant="body1" gutterBottom>
                  Este usuário ainda não possui posts
                </Typography>
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default function Users({ list }: UsersProps) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
      <Table aria-label="a users table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Usuário</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((user) => (
            <Row key={user.email} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
