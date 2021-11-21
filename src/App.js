import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './global/globalStyles';
import Login from './components/Login';
import UserContext from './contexts/UserContext';
import { useState, useEffect } from 'react';
import ProtectedRoute from './components/protectedRoutes/ProtectedRoute';
import Plans from './components/protectedRoutes/plans/Plans';
import SubscribePlan from './components/protectedRoutes/subscribePlan/SubscribePlan';
import SubscriptionDetails from './components/protectedRoutes/subscriptionDetails/SubscriptionDetails';
import FirstScreen from './components/FirstScreen';
import { getPlan } from './services/api';

export default function App() {
    const [user, setUser] = useState(null);
    const [isThereAPlan, setIsThereAPlan] = useState(null);

    useEffect(() => {
        const userLocalStorage = localStorage.getItem('gratibox-user');
        if (userLocalStorage) {
            setUser(JSON.parse(userLocalStorage));
            const promise = getPlan(JSON.parse(userLocalStorage).token);
            promise.then((res) => {
                if (res.status === 200) {
                    setIsThereAPlan(true);
                }
                if (res.status === 204) {
                    setIsThereAPlan(false);
                }
            });
        }
    }, []);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser }}>
                <GlobalStyle />
                <Routes>
                    <Route
                        path="/"
                        element={<FirstScreen isThereAPlan={isThereAPlan} />}
                    />
                    <Route
                        path="/login"
                        element={<Login isThereAPlan={isThereAPlan} />}
                    />
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
                    <Route
                        path="/detalhes-plano"
                        element={
                            <ProtectedRoute>
                                <SubscriptionDetails />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
