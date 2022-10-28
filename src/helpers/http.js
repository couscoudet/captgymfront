import axios from 'axios';

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

http.defaults.headers.post['Content-Type'] = 'application/json';
http.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


http.interceptors.request.use(config => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config
},
error => Promise.reject(error.response.data));

export default http;