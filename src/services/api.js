import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (res) {
    return res;
  },
  (err) => {
    return Promise.reject(err.response.data.message);
  }
);

export default api;