const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'

const CONFIG = {
  API_URL: isLocal ? 'http://localhost:3000' : 'https://proyectonoseguidores.onrender.com'
};