import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './global/globalStyles';
import WelcomePage from './components/WelcomePage';
import Login from './components/Login';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
