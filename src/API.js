import axios from "axios";

export default axios.create({
  // baseURL: process.env.REACT_APP_API_ENDPOINT || "http://192.168.1.107:4000",
  baseURL: "http://app.aws.wasin.me:4000" || "http://192.168.1.107:4000",
  headers: { "Content-Type": "application/json" },
});
