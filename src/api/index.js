import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api'

export function saveToken(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const getItems = async() => {
    return await axios.get("/items");
};
