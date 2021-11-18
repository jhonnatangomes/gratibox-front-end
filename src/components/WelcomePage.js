import styled from 'styled-components';
import image from '../assets/image05.jpg';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
    return (
        <PageContainer>
            <Title>
                Bem vindo ao <GratiBox>GratiBox</GratiBox>
            </Title>
            <Description>
                Receba em casa um box com chás, produtos orgânicos, incensos e
                muito mais...
            </Description>
            <ImgContainer>
                <img src={image} alt="Pessoa meditando com camisa amarela" />
            </ImgContainer>
            <ButtonsContainer>
                <Link to="/cadastro">
                    <button>Quero começar</button>
                </Link>
                <Link to="/login">
                    <button>Já sou grato</button>
                </Link>
            </ButtonsContainer>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    text-align: center;
    color: white;
`;

const Title = styled.span`
    padding: 0 17px;
    display: inline-block;
    margin-top: 53px;
    margin-bottom: 44px;
    font-weight: 500;
    font-size: 28px;
    line-height: 32.81px;
`;

const GratiBox = styled.span`
    font-weight: 700;
`;

const Description = styled.span`
    display: inline-block;
    padding: 0 17px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21.09px;
`;

const ImgContainer = styled.div`
    width: 100%;
    height: 312px;
    margin-top: 22px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ButtonsContainer = styled.div`
    width: 100%;
    background-color: #4d65a8;
    height: calc(100vh - 528px);
    display: flex;
    flex-direction: column;

    button {
        color: white;
        font-weight: 700;
        font-size: 18px;
        line-height: 21.09px;
    }

    a:first-child button {
        width: 202px;
        height: 45px;
        background-color: #8c97ea;
        border-radius: 10px;
        margin-bottom: 17px;
    }

    a:last-child button {
        width: 180px;
        height: 28px;
        background-color: inherit;
    }
`;
