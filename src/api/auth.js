// /src/api/auth.js
import axios from 'axios';

const login = async (username, password) => {
  try {
    const response = await axios.post('/api/login', { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

const logout = async () => {
  try {
    // Lakukan proses logout, seperti menghapus token dari penyimpanan lokal
    localStorage.removeItem('token');
    // Redirect ke halaman login
    window.location.href = '/login';
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

const isAuthenticated = () => {
  // Cek apakah token tersimpan di penyimpanan lokal (localStorage)
  return localStorage.getItem('token') !== null;
};

export { login, logout, isAuthenticated };
