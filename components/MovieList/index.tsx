import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Movie } from "../../models/movie";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function MovieList() {
  const movies = useSelector((state: any) => state.movies.movies?.Search);
  const isLoading = useSelector((state: any) => state.movies.isLoading);
  const error = useSelector((state: any) => state.movies.error);
  const searchText = useSelector((state: any) => state.movies.searchText);

  if (isLoading) {
    return <Box>Yükleniyor...</Box>;
  }

  if (error) {
    return <Box>Hata: {error}</Box>;
  }

  return (
    <Box>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          border: "1px solid rgba(36, 36, 36, 0.25);",
        }}
        elevation={0}
      >
        {searchText ? (
          <>
            <Typography variant="h5" component="h2" gutterBottom>
              Results for &ldquo;{searchText}&rdquo; {movies?.length} records
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              tap on a movie title to learn more about it
            </Typography>
          </>
        ) : (
          <Typography variant="caption" display="block" gutterBottom>
            Search a movie...
          </Typography>
        )}

        <Grid item xs={12} md={6}>
          <Demo>
            <List>
              <Box sx={{ maxHeight: "30vh", overflow: "auto" }}>
                {movies ? (
                  movies.map((movie: Movie, index: number) => (
                    <ListItem key={`movie-${index}`} sx={{ pl: 0, pb: 0 }}>
                      <ListItemText primary={movie.Title} />
                    </ListItem>
                  ))
                ) : (
                  <Typography variant="h5" component="h2" gutterBottom>
                    There is nothing.
                  </Typography>
                )}
              </Box>
            </List>
          </Demo>
        </Grid>
      </Paper>
    </Box>
  );
}

export default MovieList;
