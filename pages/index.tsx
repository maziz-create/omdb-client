import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Open Movie Database</title>
        <meta
          name="description"
          content="Aradığınız filmi en hızlı ve en doğru bulabileceğiniz tek adres!"
        />
        <meta name="keywords" content="Movie, Movie Search, Look for movie" />
        <meta name="author" content="Mehmet Aziz Algüllü" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
