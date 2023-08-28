import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});

const api = {
  get: (url: string) => instance.get(url),
  post: (url: string, data: any) => instance.post(url, data),
  put: (url: string, data: any) => instance.put(url, data),
  delete: (url: string) => instance.delete(url),
};

export default api;
