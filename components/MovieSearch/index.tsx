import React from "react";
import { useFormik } from "formik";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

interface SearchText {
  text: string;
}

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
  marginBottom: 15,
});

function MovieSearch() {
  const formik = useFormik<SearchText>({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      console.log("values => ", values);
    },
  });
  return (
    <Box>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          border: "1px solid rgba(36, 36, 36, 0.25)",
          mb: 2,
        }}
        elevation={0}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Movie Title
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <CssTextField
            label="Search"
            id="custom-css-outlined-input"
            onChange={formik.handleChange}
            value={formik.values.text}
            name="text"
            autoComplete="false"
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Button variant="text">Clear</Button>
            <Button
              sx={{ ml: 1 }}
              variant="contained"
              onClick={() => formik.submitForm()}
            >
              Search
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default MovieSearch;
