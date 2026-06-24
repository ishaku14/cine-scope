const API_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};