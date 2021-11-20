import styled from 'styled-components';
import { useState } from 'react';
import InfoPlan from './InfoPlan';
import InfoAdress from './InfoAdress';

export default function DeliveryInfo({
    selectedPlanInfo,
    setSelectedPlanInfo,
    renderAdress,
}) {
    const [selectedAdressInfo, setSelectedAdressInfo] = useState({
        'Nome completo': '',
        'Endereço de entrega': '',
        CEP: '',
        Cidade: '',
        Estado: '',
    });
    const info = {
        first: ['Plano', 'Entrega', 'Produtos'],
        second: ['Nome completo', 'Endereço de entrega', 'CEP', 'Cidade'],
    };

    return (
        <DeliveryInfoContainer>
            {!renderAdress
                ? info.first.map((name, i) => (
                      <InfoPlan
                          key={i}
                          name={name}
                          selectedInfo={selectedPlanInfo}
                          setSelectedInfo={setSelectedPlanInfo}
                      />
                  ))
                : info.second.map((name, i) => (
                      <InfoAdress
                          key={i}
                          name={name}
                          selectedInfo={selectedAdressInfo}
                          setSelectedInfo={setSelectedAdressInfo}
                      />
                  ))}
        </DeliveryInfoContainer>
    );
}

const DeliveryInfoContainer = styled.div`
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > div {
        margin-bottom: 7px;
    }
`;
