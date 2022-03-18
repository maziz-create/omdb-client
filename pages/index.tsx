import type { NextPage } from "next";
import Head from "next/head";

import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
          marginY: { xs: "50px" },
          width: {
            xs: "340px",
            sm: "450px",
            md: "650px",
            lg: "850px",
            xl: "1000px",
          },
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            OMDb API
          </Typography>
          <Typography variant="subtitle1" component="div" gutterBottom>
            The Open Movie Database 🍿
          </Typography>
        </Box>

        <MovieSearch />
        <MovieList />
      </Box>
    </Box>
  );
};

export default Home;
