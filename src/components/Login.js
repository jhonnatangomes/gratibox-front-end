import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
import { signUp } from '../services/api';

export default function Login() {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setWrongPassword(false);
        const body = { name, email, password, repeatPassword };
        const promise = signUp(body);
        promise
            .then(() => {
                alert('Usuário cadastrado com sucesso');
                navigate('/login');
            })
            .catch((err) => {
                if (err.response.data.includes('repeatPassword')) {
                    alert('Digite senhas iguais');
                    setWrongPassword(true);
                }
                if (err.response.status === 409) {
                    alert('Email já cadastrado. Por favor digite outro email');
                }
            });
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
                />
                <Input
                    placeholder="Senha"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    $wrongPassword={wrongPassword}
                />
                {location.pathname === '/cadastro' ? (
                    <Input
                        placeholder="Confirmar senha"
                        required
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        $wrongPassword={wrongPassword}
                    />
                ) : (
                    ''
                )}
                {location.pathname === '/cadastro' ? (
                    <MainButton path={location.pathname}>Cadastrar</MainButton>
                ) : (
                    <>
                        <MainButton>Login</MainButton>
                        <SecondaryButton>Ainda não sou grato</SecondaryButton>
                    </>
                )}
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
`;

const SecondaryButton = styled.button`
    background-color: inherit;
    color: white;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.09px;
    margin-top: 21px;
`;
