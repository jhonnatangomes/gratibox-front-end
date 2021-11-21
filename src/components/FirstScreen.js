import { useEffect } from 'react';
import { getPlan } from '../services/api';
import { useNavigate } from 'react-router';
import WelcomePage from './WelcomePage';

export default function FirstScreen() {
    const navigate = useNavigate();

    useEffect(() => {
        const userLocalStorage = localStorage.getItem('gratibox-user');
        if (userLocalStorage) {
            const promise = getPlan(JSON.parse(userLocalStorage).token);
            promise.then((res) => {
                if (res.status === 200) {
                    navigate('/detalhes-plano');
                }
                if (res.status === 204) {
                    navigate('/planos');
                }
            });
        } else {
            return <WelcomePage />;
        }
    }, []);

    return null;
}
