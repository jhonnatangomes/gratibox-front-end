import styled from 'styled-components';
import { useState } from 'react';
import Info from './Info';

export default function DeliveryInfo() {
    const [isFirstFilled, setIsFirstFilled] = useState(false);
    const [selectedFirstInfo, setSelectedFirstInfo] = useState({
        Plano: '',
        Entrega: '',
        Produtos: '',
    });
    const [selectedSecondInfo, setSelectedSecondInfo] = useState({
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
            {!isFirstFilled
                ? info.first.map((name, i) => (
                      <Info
                          key={i}
                          name={name}
                          selectedInfo={selectedFirstInfo}
                          setSelectedInfo={setSelectedFirstInfo}
                      />
                  ))
                : info.second.map((name, i) => (
                      <Info
                          key={i}
                          name={name}
                          selectedInfo={selectedSecondInfo}
                          setSelectedInfo={setSelectedSecondInfo}
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
