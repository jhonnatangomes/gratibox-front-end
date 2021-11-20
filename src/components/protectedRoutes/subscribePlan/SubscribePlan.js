import { useLocation } from 'react-router';
import styled from 'styled-components';
import formImage from '../../../assets/image03.jpg';
import DeliveryInfo from './DeliveryInfo';
import { useContext, useState } from 'react';
import { sendPlan } from '../../../services/api';
import UserContext from '../../../contexts/UserContext';

export default function SubscribePlan() {
    const { user } = useContext(UserContext);
    const [renderAdress, setRenderAdress] = useState(false);
    const [selectedPlanInfo, setSelectedPlanInfo] = useState({
        Plano: '',
        Entrega: '',
        Produtos: '',
    });
    const [selectedAdressInfo, setSelectedAdressInfo] = useState({
        'Nome completo': '',
        'Endereço de entrega': '',
        CEP: '',
        Cidade: '',
        Estado: '',
    });

    function next() {
        if (!Object.values(selectedPlanInfo).includes('')) {
            setRenderAdress(true);
        }
    }

    function finish() {
        if (!Object.values(selectedAdressInfo).includes('')) {
            const body = {
                planType: selectedPlanInfo['Plano'],
                deliveryDate: selectedPlanInfo['Entrega'],
                products: selectedPlanInfo['Produtos'],
                deliveryInfo: {
                    name: selectedAdressInfo['Nome completo'],
                    adress: selectedAdressInfo['Endereço de entrega'],
                    zipcode: selectedAdressInfo['CEP'],
                    city: selectedAdressInfo['Cidade'],
                    state: selectedAdressInfo['Estado'],
                },
            };
            const promise = sendPlan(user.token, body);
            promise
                .then(() => {
                    alert('Plano registrado com sucesso');
                })
                .catch((err) => console.log(err.response));
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
                    selectedPlanInfo={selectedPlanInfo}
                    setSelectedPlanInfo={setSelectedPlanInfo}
                    selectedAdressInfo={selectedAdressInfo}
                    setSelectedAdressInfo={setSelectedAdressInfo}
                    renderAdress={renderAdress}
                />
            </FormContainer>
            {renderAdress ? (
                <Button onClick={finish}>Finalizar</Button>
            ) : (
                <Button onClick={next}>Próximo</Button>
            )}
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

const Button = styled.button`
    width: 202px;
    height: 39px;
    background-color: #8c97ea;
    border-radius: 10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28.13px;
    margin-top: 6px;
`;
