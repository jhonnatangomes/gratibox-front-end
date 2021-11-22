import styled from 'styled-components';
import { useState } from 'react';
import InfoAdress from './infoAdress/InfoAdress';
import Plan from './infoPlan/Plan';
import Delivery from './infoPlan/Delivery';
import Products from './infoPlan/Products';

export default function DeliveryInfo({
    selectedPlanInfo,
    setSelectedPlanInfo,
    selectedAdressInfo,
    setSelectedAdressInfo,
    renderAdress,
}) {
    const adress = {
        name: 'Nome completo',
        adress: 'Endereço de entrega',
        zipcode: 'CEP',
        city: 'Cidade',
    };

    return (
        <DeliveryInfoContainer>
            {!renderAdress ? (
                <>
                    <Plan
                        selectedInfo={selectedPlanInfo}
                        setSelectedInfo={setSelectedPlanInfo}
                    />
                    <Delivery
                        selectedInfo={selectedPlanInfo}
                        setSelectedInfo={setSelectedPlanInfo}
                    />
                    <Products
                        selectedInfo={selectedPlanInfo}
                        setSelectedInfo={setSelectedPlanInfo}
                    />
                </>
            ) : (
                Object.values(adress).map((placeholder, i) => (
                    <InfoAdress
                        key={i}
                        placeholder={placeholder}
                        objectProperty={Object.keys(adress)[i]}
                        selectedInfo={selectedAdressInfo}
                        setSelectedInfo={setSelectedAdressInfo}
                    />
                ))
            )}
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
