import { useEffect, useState } from 'react';
import { tokenAuth } from '../../services/api';
import { useNavigate } from 'react-router';

export default function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userLocalStorage = localStorage.getItem('gratibox-user');
        if (userLocalStorage) {
            const promise = tokenAuth(JSON.parse(userLocalStorage).token);
            promise
                .then(() => setIsAuthenticated(true))
                .catch((err) => {
                    console.log(err.response);
                    alert('Você não está logado');
                    navigate('/login');
                });
        } else {
            navigate('/login');
        }
    }, []);

    if (!isAuthenticated) return null;
    return children;
}
