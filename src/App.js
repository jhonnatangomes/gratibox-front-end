import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './global/globalStyles';
import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import UserContext from './contexts/UserContext';
import { useState, useEffect } from 'react';
import ProtectedRoute from './components/protectedRoutes/ProtectedRoute';
import Plans from './components/protectedRoutes/plans/Plans';
import SubscribePlan from './components/protectedRoutes/subscribePlan/SubscribePlan';

export default function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userLocalStorage = localStorage.getItem('gratibox-user');
        if (userLocalStorage) {
            setUser(JSON.parse(userLocalStorage));
        }
    }, []);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Login />} />
                    <Route
                        path="/planos"
                        element={
                            <ProtectedRoute>
                                <Plans />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/assinar-plano"
                        element={
                            <ProtectedRoute>
                                <SubscribePlan />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
