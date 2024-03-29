import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

export function loginUser(dataToSubmit) {
  const request = axios
  .post("/api/users/login", dataToSubmit)
  .then((res) => res.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}