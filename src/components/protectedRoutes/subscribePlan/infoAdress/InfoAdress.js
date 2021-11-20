import styled from 'styled-components';
import CityAndState from './CityAndState';

export default function InfoAdress({ name, selectedInfo, setSelectedInfo }) {
    return (
        <AdressContainer>
            {name !== 'Cidade' ? (
                <InfoInput
                    placeholder={name}
                    value={selectedInfo[name]}
                    onChange={(e) =>
                        setSelectedInfo({
                            ...selectedInfo,
                            [name]: e.target.value,
                        })
                    }
                />
            ) : (
                <CityAndState
                    selectedInfo={selectedInfo}
                    setSelectedInfo={setSelectedInfo}
                />
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
