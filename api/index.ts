import axios from "axios";

export const httpClient = axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=11b6d4ba&s=",
  headers: {
    "Content-Type": "application/json",
  },
});
