import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import { getPlan } from '../services/api';

export default function Redirect() {
    const navigate = useNavigate();
    const userLocalStorage = localStorage.getItem('gratibox-user');

    useEffect(() => {
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
        }
    }, []);

    if (!userLocalStorage) return <WelcomePage />;
    return null;
}
