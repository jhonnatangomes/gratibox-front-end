import styled from 'styled-components';
import { useNavigate } from 'react-router';

export default function PlanDetails({ img, description, type }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/assinar-plano', { state: type });
    }

    return (
        <PlanDetailsContainer>
            <img src={img} alt="Pessoa meditando com camisa amarela" />
            <DescriptionContainer>{description}</DescriptionContainer>
            <Button onClick={handleClick}>Assinar</Button>
        </PlanDetailsContainer>
    );
}

const PlanDetailsContainer = styled.div`
    width: 100%;
    height: 400px;
    background-color: #e5cdb3;
    border-radius: 25px;

    img {
        width: 100%;
        height: 219px;
        object-fit: cover;
        border-radius: 25px;
    }
`;

const DescriptionContainer = styled.div`
    width: 320px;
    height: 61px;
    margin: 21px auto;
    font-weight: 700;
    font-size: 18px;
    line-height: 21.09px;
    color: #4d65a8;
    text-align: left;
`;

const Button = styled.button`
    width: 168px;
    height: 39px;
    background-color: #8c97ea;
    border-radius: 10px;
    margin-top: 10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28.13px;
`;
