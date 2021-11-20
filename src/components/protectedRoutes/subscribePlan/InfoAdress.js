import styled from 'styled-components';
import { HiArrowDown } from 'react-icons/hi';
import { useState } from 'react';

export default function InfoAdress({ name, selectedInfo, setSelectedInfo }) {
    const states = [
        'AC',
        'AL',
        'AP',
        'AM',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MT',
        'MS',
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO',
    ];

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <AdressContainer>
            {name !== 'Cidade' ? (
                <InfoInput placeholder={name} />
            ) : (
                <CityAndState>
                    <City placeholder="Cidade" />
                    <State onClick={handleClick} $isOpen={isOpen}>
                        <input placeholder="Estado" />
                        <ArrowIcon $isOpen={isOpen} color="#4D65A8" />
                        <StatesChoice>
                            {isOpen
                                ? states.map((state, i) => (
                                      <span key={i}>{state}</span>
                                  ))
                                : ''}
                        </StatesChoice>
                    </State>
                </CityAndState>
            )}
        </AdressContainer>
    );
}

const AdressContainer = styled.div`
    input {
        height: 44px;
        background-color: rgba(224, 209, 237, 0.62);
        border-radius: 5px;
        padding: 0 12px;
        outline: none;
        border: none;
        font-weight: 700;
        font-size: 18px;
        line-height: 21.09px;

        &::placeholder {
            color: #4d65a8;
        }
    }
`;

const InfoInput = styled.input`
    width: 290px;
`;

const CityAndState = styled.div`
    display: flex;
    justify-content: space-between;
    width: 290px;
    min-height: 44px;
`;

const City = styled.input`
    width: 168px;
    height: 44px;
`;

const State = styled.div`
    width: 108px;
    position: relative;

    input {
        width: 100%;
        border-radius: ${({ $isOpen }) => ($isOpen ? '5px 5px 0 0' : '5px')};
    }
`;

const StatesChoice = styled.div`
    width: 108px;
    display: flex;
    flex-direction: column;
    background-color: rgba(224, 209, 237, 0.62);
    border-radius: 0 0 5px 5px;

    span {
        color: #4d65a8;
        display: inline-block;
        margin-bottom: 2px;
    }

    span:first-child {
        border-top: 1px solid lightgray;
    }

    span:not(:last-child) {
        border-bottom: 1px solid lightgray;
    }
`;

const ArrowIcon = styled(HiArrowDown)`
    font-size: 24px;
    display: ${({ $isOpen }) => ($isOpen ? 'none' : 'initial')};
    position: absolute;
    top: 9px;
    right: 8px;
`;
