import axios from "axios";

const Api = axios.create({
     baseURL: "http://127.0.0.1:3001", // if we use .env file in react js the name convection is REACT_APP_<nameyouwant>
     withCredentials: true
});

export function makeRequest(url, options) {
     return Api(url, options)
          .then(res => res.data)
          .catch(err => Promise.reject(err?.response?.data?.message ?? "Error"))
}