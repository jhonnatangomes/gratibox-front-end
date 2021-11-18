import styled from 'styled-components';
import image from '../assets/image05.jpg';

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
                <button>Quero começar</button>
                <button>Já sou grato</button>
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

    button {
        color: white;
        font-weight: 700;
        font-size: 18px;
        line-height: 21.09px;
        border: none;
    }

    button:first-child {
        width: 202px;
        height: 45px;
        background-color: #8c97ea;
        border-radius: 10px;
        margin-bottom: 17px;
    }

    button:last-child {
        width: 180px;
        height: 28px;
        background-color: inherit;
    }
`;
