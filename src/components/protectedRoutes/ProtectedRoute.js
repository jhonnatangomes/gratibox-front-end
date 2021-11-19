import { useEffect, useState, useContext } from 'react';
import { tokenAuth } from '../../services/api';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router';

export default function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const promise = tokenAuth(user.token);
            promise
                .then(() => setIsAuthenticated(true))
                .catch(() => {
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
