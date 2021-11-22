import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import styled from 'styled-components';
import detailsImg from '../../../assets/image03.jpg';
import { getPlan } from '../../../services/api';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router';

export default function SubscriptionDetails() {
    const { user } = useContext(UserContext);
    const [planInfo, setPlanInfo] = useState(null);
    const navigate = useNavigate();
    console.log(planInfo);

    useEffect(() => {
        if (localStorage.getItem('plano') === 'false') {
            navigate('/planos');
            return null;
        }
        const promise = getPlan(user.token);
        promise.then((res) => setPlanInfo(res.data));
    }, []);

    return (
        <PageContainer>
            <Title>Bom te ver por aqui, {user.name}</Title>
            <Description>
                "Agradecer é a arte de atrair coisas boas"
            </Description>
            <InfoContainer>
                <img
                    src={detailsImg}
                    alt="Pessoa meditando com camisa amarela"
                />
                {planInfo ? (
                    <>
                        <Details>
                            <Detail>
                                <span>Plano: </span>
                                <span>{planInfo.planType}</span>
                            </Detail>
                            <Detail>
                                <span>Data da assinatura: </span>
                                <span>
                                    {dayjs(planInfo.subscriptionDate).format(
                                        'DD/MM/YYYY'
                                    )}
                                </span>
                            </Detail>
                            <Detail>
                                <span>Próximas entregas: </span>
                                <NextDeliveries>
                                    {planInfo.deliveryDates.map((date, i) => (
                                        <p key={i}>{date}</p>
                                    ))}
                                </NextDeliveries>
                            </Detail>
                        </Details>
                        <Products>
                            {planInfo.selectedProducts.map((product, i) => (
                                <span key={i}>{product.name}</span>
                            ))}
                        </Products>
                    </>
                ) : (
                    ''
                )}
            </InfoContainer>
            <Evaluate>Avaliar entregas</Evaluate>
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
    margin-top: 101px;
`;

const Description = styled.span`
    display: inline-block;
    font-size: 18px;
    line-height: 21.09px;
    font-weight: 300;
    margin-top: 22px;
`;

const InfoContainer = styled.div`
    width: 100%;
    height: 382px;
    margin-top: 12px;
    background-color: white;
    border-radius: 10px;

    img {
        width: 100%;
        height: 172px;
        object-fit: cover;
        border-radius: 10px;
    }
`;

const Details = styled.div`
    width: 319px;
    height: 129px;
    margin: 22px auto;
    text-align: left;
`;

const Detail = styled.div`
    span {
        font-size: 18px;
        line-height: 21.09px;
        font-weight: 700;
    }

    span:first-child {
        color: #4d65a8;
    }

    span:last-child {
        color: #e63c80;
    }
`;

const NextDeliveries = styled.div`
    margin-left: 20px;

    p {
        font-size: 18px;
        line-height: 21.09px;
        font-weight: 700;
        color: #e63c80;
    }
`;

const Products = styled.div`
    width: 319px;
    margin: 0 auto;
    margin-top: 29px;
    display: flex;
    justify-content: space-between;

    span {
        font-size: 18px;
        line-height: 21.09px;
        font-weight: 400;
        color: #e63c80;
    }
`;

const Evaluate = styled.button`
    width: 237px;
    height: 56px;
    background-color: #8c97ea;
    border-radius: 10px;
    margin-top: 21px;
    font-size: 24px;
    font-weight: 500;
    line-height: 28.13px;
`;
