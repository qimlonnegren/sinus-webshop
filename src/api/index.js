import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

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

export async function fetchOrders(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const response = await axios.get("/api/orders/");
  return response;
}

export async function postOrder(order, token) {
  if (token) {
    console.log("bearer added");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  const response = await axios.post("/api/orders", { items: order });
  return response;
}

export async function postOrderAnon(order, customerData) {
  console.log("Shipping adress", { items: order, shippingAddress: customerData });
  const shippingAddress = {
    street: customerData.address,
    zip: customerData.zip,
    city: customerData.city,
  };
  const response = await axios.post("/api/orders", { items: order, shippingAddress });
  return response;
}
export const getItems = async (page) => {
  return await axios.get(`/api/items?pageSize=9&page=${page}`);
};
export async function getSingleProduct (id){
  return await axios.get(`api/items/${id}`)
}

export async function getAttireCategory (){
  return await axios.get(
    "api/items?category=hoodie&category=tshirt&category=socks",
    {}
  );
}

export async function getSkateboardsCategory (){
  return await axios.get("api/items?category=skateboard", {})
}

export async function getAccessoriesCategory (){
  return await axios.get("api/items?category=totebag&category=wheel&category=cap", {})
}

export async function getMoreAttire (page){
  return await axios.get(`api/items?category=hoodie&category=tshirt&category=socks&page=${page}`, {}
  )
}

export async function getMoreSkateboards (page){
  return await axios.get(`api/items?category=skateboard&page=${page}`, {}
  )
}

export async function getMoreAccessories (page){
  return await axios.get(`api/items?category=totebag&category=wheel&category=cap&page=${page}`, {}
  )
}
