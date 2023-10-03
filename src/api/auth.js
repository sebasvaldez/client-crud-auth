import axios from "./axios.js";


export const registerRequest = user=> axios.post(`/register`, user);

export const loginRequest = user => axios.post(`/login`, user);

export const verifyTokenRequest= token => axios.get(`/verify`, token);

export const logoutRequest = () => axios.post(`/logout`);