import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://upload-ai-server-6si4.onrender.com'
})