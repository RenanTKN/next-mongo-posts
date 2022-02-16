import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fórum MongoDB</title>
        <meta name="description" content="Fórum utilizando NextJS e MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
