import axios from "axios";

export const getExample = () => {
  return axios
    .get("/api/")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};