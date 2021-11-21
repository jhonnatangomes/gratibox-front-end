import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { login, signUp } from '../services/api';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { Ellipsis } from 'react-spinners-css';

export default function Login({ isThereAPlan }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false);
    const { setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setWrongPassword(false);
        if (location.pathname === '/cadastro') {
            const body = { name, email, password, repeatPassword };
            const promise = signUp(body);
            promise
                .then(() => {
                    alert('Usuário cadastrado com sucesso');
                    setLoading(false);
                    navigate('/login');
                })
                .catch((err) => {
                    if (err.response.data.includes('repeatPassword')) {
                        alert('Digite senhas iguais');
                        setWrongPassword(true);
                    }
                    if (err.response.status === 409) {
                        alert(
                            'Email já cadastrado. Por favor digite outro email'
                        );
                    }
                    setLoading(false);
                });
        }
        if (location.pathname === '/login') {
            const body = { email, password };
            const promise = login(body);
            promise
                .then((res) => {
                    setUser(res.data);
                    localStorage.setItem(
                        'gratibox-user',
                        JSON.stringify(res.data)
                    );
                    setLoading(false);
                    if (isThereAPlan) {
                        navigate('/detalhes-plano');
                    } else {
                        navigate('/planos');
                    }
                })
                .catch((err) => {
                    if (err.response.status === 401) {
                        alert('Email e/ou senha errados');
                    }
                    setLoading(false);
                });
        }
    }

    return (
        <PageContainer>
            <Title>
                Bem vindo ao <GratiBox>GratiBox</GratiBox>
            </Title>
            <Form onSubmit={handleSubmit}>
                {location.pathname === '/cadastro' ? (
                    <Input
                        placeholder="Nome"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading}
                    />
                ) : (
                    ''
                )}
                <Input
                    placeholder="Email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                />
                <Input
                    placeholder="Senha"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    $wrongPassword={wrongPassword}
                    disabled={loading}
                />
                {location.pathname === '/cadastro' ? (
                    <Input
                        placeholder="Confirmar senha"
                        required
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        $wrongPassword={wrongPassword}
                        disabled={loading}
                    />
                ) : (
                    ''
                )}
                <ButtonsContainer>
                    {location.pathname === '/cadastro' ? (
                        <MainButton path={location.pathname} disabled={loading}>
                            {loading ? <Ellipsis color="white" /> : 'Cadastrar'}
                        </MainButton>
                    ) : (
                        <>
                            <MainButton disabled={loading}>
                                {loading ? <Ellipsis color="white" /> : 'Login'}
                            </MainButton>
                            <Link to="/cadastro">
                                <SecondaryButton disabled={loading}>
                                    Ainda não sou grato
                                </SecondaryButton>
                            </Link>
                        </>
                    )}
                </ButtonsContainer>
            </Form>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    padding: 0 25px;
    color: white;
    text-align: center;
`;

const Title = styled.span`
    display: inline-block;
    margin-top: 101px;
    margin-bottom: 43px;
    font-weight: 500;
    font-size: 28px;
    line-height: 32.81px;
`;

const GratiBox = styled.span`
    font-weight: 700;
`;

const Form = styled.form`
    input:not(:nth-child(4)) {
        margin-bottom: 8px;
    }
`;

const Input = styled.input`
    padding: 17px 0px 17px 17px;
    width: 100%;
    height: 64px;
    border-radius: 10px;
    outline: none;
    border: ${({ $wrongPassword }) =>
        $wrongPassword ? '1px solid red' : 'none'};
    font-size: 24px;
    line-height: 28.13px;
    font-weight: 500;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainButton = styled.button`
    width: 237px;
    height: 56px;
    border-radius: 10px;
    background-color: #8c97ea;
    color: white;
    font-size: 36px;
    font-weight: 700;
    line-height: 42.19px;
    margin-top: ${({ path }) => (path === '/cadastro' ? '62px' : '144px')};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SecondaryButton = styled.button`
    background-color: inherit;
    color: white;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.09px;
    margin-top: 21px;
`;
