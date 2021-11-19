import { useEffect, useState, useContext } from 'react';
import { tokenAuth } from '../../services/api';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router';
import { Route } from 'react-router-dom';

export default function ProtectedRoute({ component: Component }) {
    console.log('came here');
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
                    return null;
                });
        } else {
            navigate('/login');
            return null;
        }
    }, []);

    if (!isAuthenticated) return null;
    return <Route element={<Component />} />;
}
