import axios from 'axios';
const baseUrl = process.env.REACT_APP_BASE_URL;

function signUp(body) {
    return axios.post(`${baseUrl}/sign-up`, body);
}

export { signUp };
