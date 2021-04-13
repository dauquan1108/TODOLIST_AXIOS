import axios from "axios";

export default function CallApi(method = "get", data) {
  return axios({
    method: method,
    url: "https://5c965f64939ad600149a94f9.mockapi.io/ToDoList",
    data: data,
  }).catch((error) => {
    console.log(error);
  });
}
