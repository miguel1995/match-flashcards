import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sq6oa4qrj2.execute-api.us-east-1.amazonaws.com/ETAPA_DEV/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
