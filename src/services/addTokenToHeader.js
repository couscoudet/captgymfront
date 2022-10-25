import { http } from '../helpers/http';

const setup = () => {
  http.interceptors.request.use(config => {
    const token = window.localStorage.getItem('token');

    if (token) {
      config.headers['X-Auth-Token'] = token;
    }

    return config;
  },
  error => {
    return Promise.reject(error)
  });
}

export const interceptorsSetup = {
  setup
}
