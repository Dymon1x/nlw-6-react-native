import axios from 'axios';//utilizado para consumir api - no caso, a api do discord agora

const api = axios.create({
  baseURL: 'https://discord.com/api'
});

export { api }