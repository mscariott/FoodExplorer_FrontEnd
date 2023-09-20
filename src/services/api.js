import axios from "axios"

export const api = axios.create({
  baseURL: "https://foodexplorer-api-e8k8.onrender.com"
})