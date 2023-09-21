import axios from "axios";

import axiosRetry from "axios-retry";

const instance = axios.create({
  timeout: 60000,
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

instance.interceptors.request.use((config) => {
  return config;
});

axiosRetry(instance, { retries: 5, retryDelay: axiosRetry.exponentialDelay });

const api = () => {
  return instance;
};

export default api;
