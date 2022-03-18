import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://www.omdbapi.com/?apikey=11b6d4ba&s=",
});
