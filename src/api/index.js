import axios from "axios";

// axios.defaults.headers.common["Authorization"] = `Bearer`;
// axios.defaults.baseURL = ""

// export async function AuthUser() {
//   const response = await axios.post("/api/auth/");
//   return response.data;
// }

export async function getUser() {
  const response = await axios.get("/api/me");
  return response;
}

export async function registerUser() {
  const response = await axios.post("/api/register/");
  return response;
}
