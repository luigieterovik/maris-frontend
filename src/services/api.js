import axios from 'axios'

const api = axios.create({
  baseURL: 'https://maris-backend-production.up.railway.app'
})

export default api
