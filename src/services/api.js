import axios from "axios";
import md5 from "md5";

export const { REACT_APP_API_KEY, REACT_APP_PRIVATE_KEY } = process.env;

export const TS = Number(new Date());

export const HASH = md5(TS + REACT_APP_PRIVATE_KEY + REACT_APP_API_KEY);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
});

export default api;
