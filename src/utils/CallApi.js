import axios from "axios";
// import * as Config from "./Config";

export default function CallApi(
  method = "get",
  url = `https://5c965f64939ad600149a94f9.mockapi.io/ToDoList`,
  body
) {
  return axios({
    method: method,
    url: url,
    data: body,
  }).catch((error) => {
    console.log(error);
  });
}
