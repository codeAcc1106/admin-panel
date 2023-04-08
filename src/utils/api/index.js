import axios from 'axios';
import { startsWith } from 'lodash';
import { cookie } from './../cookies/cookies';
import { toast } from 'react-toastify';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const authHeader = () => {
  const token = cookie.get('token');
  return { Authorization: `Bearer ${token}` };
};

const url = (path, params) => {
  const sections = path.split(':');
  const sectionsWithParams = sections.map((section) => (startsWith(section, '/') ? section : params[section]));
  const pathWithParams = sectionsWithParams.join('');
  return process.env.REACT_APP_API_URL + pathWithParams;
};

const url1 = (path, params) => {
  const sections = path.split(':');
  const sectionsWithParams = sections.map((section) => (startsWith(section, '/') ? section : params[section]));
  const pathWithParams = sectionsWithParams.join('');
  return process.env.REACT_APP_FRONT_API_URL + pathWithParams;
};

const getHeaders = (auth) => {
  let headers = { ...defaultHeaders };

  if (auth) {
    headers = { ...headers, ...authHeader() };
  }
  return headers;
};

const apiService = axios.create({});

export const get = (path, params = {}, auth = true) => apiService.get(url(path, params), { params, headers: getHeaders(auth) });

export const getFront = (path, params = {}, auth = true) => apiService.get(url1(path, params), { params, headers: getHeaders(auth) });

export const post = (path, params = {}, auth = true) => apiService.post(url(path, params), params, { headers: getHeaders(auth) });

export const put = (path, params = {}, auth = true) => apiService.put(url(path, params), params, { headers: getHeaders(auth) });

export const patch = (path, params = {}, auth = true) => apiService.patch(url(path, params), params, { headers: getHeaders(auth) });

export const deleteRequest = (path, params = {}, auth = true) => apiService.delete(url(path, params), { params, headers: getHeaders(auth) });

export const upload = (path, params = {}, auth = true) =>
  apiService.post(url(path, params), params, {
    headers: { ...getHeaders(auth), 'content-type': 'multipart/form-data' },
  });

export const download = (path, params = {}, auth = true) =>
  apiService.get(url(path, params), {
    responseType: 'blob',
    params,
    headers: getHeaders(auth),
  });

// apiService.interceptors.response.use(
//   function (response) {
//     console.log('api service ==>', response);
//     return response;
//   },

//   function (error) {
//     if (error.response && error.response.data && error.response.data.message) {
//       toast.error(error.response.data.message);
//       console.error(error.response.data.message);
//     }

//     if (error && error.response && error.response.status === 401) {
//       cookie.remove('token');
//       window.location.href = '/login';
//     } else {
//       return Promise.reject(error.response);
//     }
//     return Promise.reject(error.response);
//   }
// );