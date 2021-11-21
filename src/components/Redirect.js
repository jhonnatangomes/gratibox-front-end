import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import WelcomePage from './WelcomePage';
import { getPlan } from '../services/api';

export default function Redirect() {
    const navigate = useNavigate();

    useEffect(() => {
        const userLocalStorage = localStorage.getItem('gratibox-user');
        if (userLocalStorage) {
            const promise = getPlan(JSON.parse(userLocalStorage).token);
            promise.then((res) => {
                if (res.status === 200) {
                    navigate('/detalhes-plano');
                    localStorage.setItem('plano', true);
                }
                if (res.status === 204) {
                    navigate('/planos');
                    localStorage.setItem('plano', false);
                }
            });
        } else {
            return <WelcomePage />;
        }
    }, []);

    return null;
}
