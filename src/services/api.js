import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;

function signUp(body) {
    return axios.post(`${baseUrl}/sign-up`, body);
}

function login(body) {
    return axios.post(`${baseUrl}/login`, body);
}

function headersConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

function tokenAuth(token) {
    return axios.post(`${baseUrl}/token`, {}, headersConfig(token));
}

function getPlans(token) {
    return axios.get(`${baseUrl}/plans/info`, headersConfig(token));
}

function getDates(token, planType) {
    return axios.get(`${baseUrl}/plans/${planType}/info`, headersConfig(token));
}

export { signUp, login, tokenAuth, getPlans, getDates };
