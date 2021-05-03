import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/api/users/login", dataToSubmit)
    .then((response) => response.data);

  //return을 시켜서 리듀서로 보낸다.
  //action은 타입과 payload가 필요
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post("/api/users/register", dataToSubmit)
    .then((response) => response.data);

  //return을 시켜서 리듀서로 보낸다.
  //action은 타입과 payload가 필요
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth(dataToSubmit) {
  const request = axios
    .get("/api/users/auth", dataToSubmit)
    .then((response) => response.data);

  //return을 시켜서 리듀서로 보낸다.
  //action은 타입과 payload가 필요
  return {
    type: AUTH_USER,
    payload: request,
  };
}
