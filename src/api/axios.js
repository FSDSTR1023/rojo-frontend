import axios from 'axios'

// URL from the host
const baseURL = import.meta.env.VITE_BASE_URL

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
})

export default instance
