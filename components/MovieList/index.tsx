import React from "react";

import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function MovieList() {
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
        <Typography variant="h5" component="h2" gutterBottom>
          Results for --Search--
        </Typography>

        <Typography variant="caption" display="block" gutterBottom>
          tap on a movie title to learn more about it
        </Typography>

        <Grid item xs={12} md={6}>
          <Demo>
            <List>
              <Box sx={{ maxHeight: "30vh", overflow: "auto" }}>
                <ListItem sx={{ pl: 0, pb: 0 }}>
                  <ListItemText primary="Movie 1" />
                </ListItem>
                <ListItem sx={{ pl: 0, pb: 0 }}>
                  <ListItemText primary="Movie 2" />
                </ListItem>
                <ListItem sx={{ pl: 0, pb: 0 }}>
                  <ListItemText primary="Movie 3" />
                </ListItem>
              </Box>
            </List>
          </Demo>
        </Grid>
      </Paper>
    </Box>
  );
}

export default MovieList;
