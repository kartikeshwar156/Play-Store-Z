import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5badad459b9b406f9f02fdc8522490ad",
  },
});

export {CanceledError};
