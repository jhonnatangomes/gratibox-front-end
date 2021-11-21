import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import WelcomePage from './WelcomePage';

export default function FirstScreen({ isThereAPlan }) {
    const navigate = useNavigate();

    useEffect(() => {
        const userLocalStorage = localStorage.getItem('gratibox-user');
        if (userLocalStorage) {
            if (isThereAPlan === true) {
                navigate('/detalhes-plano');
            }
            if (isThereAPlan === false) {
                navigate('/planos');
            }
        } else {
            return <WelcomePage />;
        }
    }, [isThereAPlan]);

    return null;
}
