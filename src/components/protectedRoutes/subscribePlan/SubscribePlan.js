import { useLocation } from 'react-router';
import styled from 'styled-components';
import formImage from '../../../assets/image03.jpg';
import DeliveryInfo from './DeliveryInfo';
import { useState } from 'react';

export default function SubscribePlan({ user }) {
    const { state } = useLocation();
    const [renderAdress, setRenderAdress] = useState(false);
    const [selectedInfo, setSelectedInfo] = useState({
        Plano: '',
        Entrega: '',
        Produtos: '',
        Endereço: {
            'Nome completo': '',
            'Endereço de entrega': '',
            CEP: '',
            Cidade: '',
            Estado: '',
        },
    });

    function handleClick() {
        if (
            selectedInfo['Plano'] &&
            selectedInfo['Entrega'] &&
            selectedInfo['Produtos']
        ) {
            setRenderAdress(true);
        }
    }

    return (
        <PageContainer>
            <Title>Bom te ver por aqui, {user.name}</Title>
            <Description>
                “Agradecer é a arte de atrair coisas boas”
            </Description>
            <FormContainer>
                <img
                    src={formImage}
                    alt="Pessoa meditando com camisa amarela em fundo branco"
                />
                <DeliveryInfo
                    selectedInfo={selectedInfo}
                    setSelectedInfo={setSelectedInfo}
                    renderAdress={renderAdress}
                />
            </FormContainer>
            <Next onClick={handleClick}>Próximo</Next>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    padding: 0 8px;
    text-align: center;
    color: white;
`;

const Title = styled.span`
    display: inline-block;
    font-size: 26px;
    line-height: 30.47px;
    font-weight: 700;
    margin-top: 83px;
`;

const Description = styled.span`
    display: inline-block;
    font-size: 18px;
    line-height: 21.09px;
    font-weight: 300;
    margin-top: 22px;
`;

const FormContainer = styled.div`
    width: 100%;
    height: 429px;
    background-color: white;
    margin-top: 30px;
    border-radius: 10px;
    overflow: auto;

    img {
        width: 100%;
        height: 172px;
        object-fit: cover;
        border-radius: 10px;
    }
`;

const Next = styled.button`
    width: 202px;
    height: 39px;
    background-color: #8c97ea;
    border-radius: 10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28.13px;
    margin-top: 6px;
`;
