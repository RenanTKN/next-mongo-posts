import Head from "next/head";
import { Container, CssBaseline } from "@mui/material";

import Navbar from "./Navbar";

interface LayoutProps {
  children: any;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>Fórum MongoDB</title>
        <meta name="description" content="Fórum utilizando NextJS e MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xl" sx={{ pt: 3 }}>
        {children}
      </Container>
    </div>
  );
}
