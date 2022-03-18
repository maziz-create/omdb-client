import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { getMoviesAsync } from "../../redux/movies/services";
import { setSearchText } from "../../redux/movies/moviesSlice";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

interface Search {
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
  const dispatch = useDispatch();
  const formik = useFormik<Search>({
    initialValues: {
      text: "",
    },
    onSubmit: (values) => {
      if (values.text === "") return;
      onSearch(values);
    },
  });

  function onSearch(values: Search) {
    dispatch(setSearchText(values.text));
    dispatch(getMoviesAsync(values.text));
  }

  function handleClear() {
    if (formik.values.text !== "") {
      formik.resetForm();
      dispatch(getMoviesAsync(""));
      dispatch(setSearchText(""));
    }
  }

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
          <FormControl fullWidth sx={{ marginY: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              name="text"
              onChange={formik.handleChange}
              value={formik.values.text}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              label="Search"
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 2,
            }}
          >
            <Button
              variant="text"
              sx={{ color: "#50B83C" }}
              onClick={handleClear}
            >
              Clear
            </Button>
            <Button
              sx={{
                ml: 1,
                borderRadius: "32px",
                backgroundColor: "#50B83C",
                "&:hover": {
                  backgroundColor: "#50B83C",
                  boxShadow: " 0px 0px 12px rgba(0, 0, 0, 0.25)",
                },
              }}
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
