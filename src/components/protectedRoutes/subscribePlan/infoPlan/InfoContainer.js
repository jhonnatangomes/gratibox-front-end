import styled from 'styled-components';
import { HiArrowDown } from 'react-icons/hi';
import { useState } from 'react';

export default function InfoContainer({ name, checkBox, choices, selected }) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <Container onClick={handleClick}>
            <InfoTitle>
                <span>{name}</span>
                <ArrowIcon $isOpen={isOpen} color="#4D65A8" />
            </InfoTitle>
            {isOpen ? (
                <Choices>
                    {choices.map((choice, i) => (
                        <Choice key={i}>
                            <WhiteBox
                                $selected={selected[i]}
                                onClick={(e) => checkBox(e, i)}
                            />
                            <span>{choice}</span>
                        </Choice>
                    ))}
                </Choices>
            ) : (
                ''
            )}
        </Container>
    );
}

const Container = styled.div`
    width: 290px;
    min-height: 44px;
    background-color: rgba(224, 209, 237, 0.62);
    border-radius: 5px;
    padding: 0 12px;
`;

const InfoTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;

    span {
        font-weight: 700;
        font-size: 18px;
        line-height: 21.09px;
        color: #4d65a8;
    }
`;

const ArrowIcon = styled(HiArrowDown)`
    font-size: 24px;
    display: ${({ $isOpen }) => ($isOpen ? 'none' : 'initial')};
`;

const Choices = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & > div {
        margin-bottom: 10px;
    }
`;

const Choice = styled.div`
    display: flex;
    align-items: center;

    span {
        font-weight: 400;
        font-size: 18px;
        line-height: 21.09px;
        color: #4d65a8;
    }
`;

const WhiteBox = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 6px;
    background-color: ${({ $selected }) => ($selected ? 'green' : 'white')};
`;
