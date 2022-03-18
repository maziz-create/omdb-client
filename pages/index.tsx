import type { NextPage } from "next";
import Head from "next/head";

import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";

import Box from "@mui/material/Box";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
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

      <Box
        sx={{
          p: { xs: "15px", sm: "50px", md: "250px", lg: "350px", xl: "500px" },
        }}
      >
        <MovieSearch />
        <MovieList />
      </Box>
    </Box>
  );
};

export default Home;
