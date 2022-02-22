import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

// export async function AuthUser() {
//   const response = await axios.post("/api/auth/");
//   return response.data;
// }

export async function authUser(userCredentials) {
  const credentials = userCredentials;
  const response = await axios.post("/api/auth/", credentials);
  return response;
}

export async function getUser(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const response = await axios.get("/api/me");
  return response;
}

export async function registerUser(user) {
  const body = user;
  const response = await axios.post("/api/register/", body);
  return response;
}
