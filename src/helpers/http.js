import axios from 'axios';

const http = axios.create({
    baseURL: 'http://captgym.local/api'
});

http.defaults.headers.post['Content-Type'] = 'application/json';

http.interceptors.request.use(config => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config
},
error => Promise.reject(error));

export default http;