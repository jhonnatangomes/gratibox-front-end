import styled from 'styled-components';
import { useLocation } from 'react-router';

export default function Login() {
    const location = useLocation();

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <PageContainer>
            <Title>
                Bem vindo ao <GratiBox>GratiBox</GratiBox>
            </Title>
            <Form onSubmit={handleSubmit}>
                {location.pathname === '/cadastro' ? (
                    <input placeholder="Nome" required></input>
                ) : (
                    ''
                )}
                <input placeholder="Email" required type="email"></input>
                <input placeholder="Senha" required type="password"></input>
                {location.pathname === '/cadastro' ? (
                    <input
                        placeholder="Confirmar senha"
                        required
                        type="password"
                    ></input>
                ) : (
                    ''
                )}
                {location.pathname === '/cadastro' ? (
                    <MainButton>Cadastrar</MainButton>
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

    input {
        padding: 17px 0px 17px 17px;
        width: 100%;
        height: 64px;
        border-radius: 10px;
        outline: none;
        border: none;
        font-size: 24px;
        line-height: 28.13px;
        font-weight: 500;
    }
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
