import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
}

const clientApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default clientApi;