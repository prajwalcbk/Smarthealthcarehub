import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.2:8000/api/', // Your Laravel backend URL
  withCredentials: true, // Include cookies in the requests
});

// Function to retrieve CSRF token from Laravel backend
async function getCsrfToken() {
  const response = await api.get('/token');
  return response.data;
}

export { api, getCsrfToken };
