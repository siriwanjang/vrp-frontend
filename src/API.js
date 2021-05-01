import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT || "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
});
