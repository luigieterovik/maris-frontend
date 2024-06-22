import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://maris-backend-production.up.railway.app'
})
