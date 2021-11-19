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

export { signUp, login, tokenAuth };
