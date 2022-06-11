const axios = require("axios");

const config = { headers: { "Content-Type": "multipart/form-data" } };

// const API = axios.create({ baseURL: "http://127.0.0.1:8000" });
const API = axios.create({
  baseURL: "https://gadgetinfo.herokuapp.com",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const loaduser = () => API.get("/api/user/me");

export const alluser = () => API.get("/api/user/admin/users");

export const userDetails = (id) => API.get(`/api/user/admin/user/${id}`);

export const updateuser = (id, data) =>
  API.put(`/api/user/admin/user/${id}`, data, config);

export const deleteuser = (id) => API.delete(`/api/user/admin/user/${id}`);

export const updateprofile = (data) =>
  API.put("/api/user/me/update", data, config);

// export const fetchPhones = (keyword = "") => API.get(`/api/phones/${keyword}`);

export const fetchPhone = (id) => API.get(`/api/phones/${id}`);

export const adminProduct = () => API.get("/api/phones/admin/phones");

export const newPhone = (phoneData) =>
  API.post("/api/phones/admin/phone/new", phoneData, config);

export const updatephone = (id, phoneData) =>
  API.put(`/api/phones/admin/phone/${id}`, phoneData, config);

export const deleteItem = (id) => API.delete(`/api/phones/admin/phone/${id}`);

export const comparephone = (phoneOne, phoneTwo) =>
  API.get(`/api/phones/compare/phone/${phoneOne}/${phoneTwo}`);
