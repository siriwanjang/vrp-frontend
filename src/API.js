import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "http://app.aws.wasin.me:4000",
  headers: { "Content-Type": "application/json" },
});
