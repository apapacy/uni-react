import axios from 'axios';

const baseURL = 'https://conduit.productionready.io/api'
const transport = axios.create({
  baseURL,
  withCredentials: true,
});
let JWT = void 0;

export function setJWT(value) {
  JWT = value;
}

export function request(req, {url, method, params, data, }) {
  const headers = {};
  if (req && req.signedCookies.token) {
    headers.Authorization = `Token ${req.signedCookies.token}`;
  } else if (JWT) {
    headers.Authorization = `Token ${JWT}`;
  }
  console.log(headers);
  return transport.request({url, method, params, data, headers });
}

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

/*
const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};
*/
