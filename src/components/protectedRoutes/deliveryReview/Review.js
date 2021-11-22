import styled from 'styled-components';
import reviewImage from '../../../assets/image01.jpg';
import { getDeliveries, postReview } from '../../../services/api';
import { useEffect, useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import UserContext from '../../../contexts/UserContext';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useLocation, useNavigate } from 'react-router';
dayjs.extend(utc);

export default function Review() {
    const [deliveries, setDeliveries] = useState(null);
    const { state } = useLocation();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!state || state.from !== '/detalhes-plano') {
            navigate('/planos');
            return null;
        }
        const promise = getDeliveries(user.token);
        promise.then((res) => {
            setDeliveries(res.data);
        });
    }, []);

    function review(type, i, date) {
        if (deliveries[i].review === null) {
            if (type === 'up') {
                const newDeliveries = deliveries;
                newDeliveries[i].review = true;
                const body = {
                    date,
                    review: true,
                    complaint: null,
                    comments: null,
                };
                const promise = postReview(user.token, body);
                promise.then(() => {
                    setDeliveries([...newDeliveries]);
                });
            }
            if (type === 'down') {
                navigate('/detalhes-plano/avaliar/comentarios', {
                    state: {
                        date,
                        from: '/detalhes-plano/avaliar',
                    },
                });
            }
        } else {
            alert('Você já avaliou essa entrega.');
        }
    }

    return (
        <PageContainer>
            <div>
                <Title>Reserve um tempo para avaliar nossas entregas.</Title>
                <Description>
                    “Quem agradece é humilde, valoriza a vida e honra a gratidão
                    entre todas as pessoas.”
                </Description>
            </div>
            <InfoContainer>
                <img
                    src={reviewImage}
                    alt="Pessoa com camisa verde meditando"
                />
                {deliveries
                    ? deliveries.map((delivery, i) => (
                          <Box key={delivery.id}>
                              <span>
                                  Box:{' '}
                                  {dayjs(delivery.date)
                                      .utc()
                                      .format('DD/MM/YYYY')}
                              </span>
                              <ReviewsContainer $selected={delivery.review}>
                                  <ReviewBox
                                      onClick={() =>
                                          review('up', i, delivery.date)
                                      }
                                  >
                                      🙏
                                  </ReviewBox>
                                  <ReviewBox
                                      onClick={() =>
                                          review('down', i, delivery.date)
                                      }
                                  >
                                      👎
                                  </ReviewBox>
                              </ReviewsContainer>
                          </Box>
                      ))
                    : ''}
            </InfoContainer>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.div`
    margin-top: 43px;
    width: 341px;
    font-weight: 700;
    font-size: 26px;
    line-height: 30.47px;
`;

const Description = styled.span`
    display: inline-block;
    font-weight: 300;
    font-size: 18px;
    line-height: 21.09px;
    width: 333px;
    margin-top: 20px;
`;

const InfoContainer = styled.div`
    width: 100%;
    height: 445px;
    background-color: white;
    padding: 3px 10px;

    img {
        width: 100%;
        height: 181px;
        object-fit: cover;
        margin-bottom: 58px;
    }
`;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-items: center;
    margin-bottom: 11px;

    span {
        font-weight: 400;
        font-size: 24px;
        line-height: 28.13px;
        color: #8c97ea;
    }
`;

const ReviewsContainer = styled.div`
    display: flex;
    div:first-child {
        margin-right: 12px;
        background-color: ${({ $selected }) =>
            $selected === true ? '#c70452' : '#e0d1ed'};
    }
    div:last-child {
        background-color: ${({ $selected }) =>
            $selected === false ? '#c70452' : '#e0d1ed'};
    }
`;

const ReviewBox = styled.div`
    width: 52px;
    height: 45px;
    border-radius: 5px;
    font-size: 24px;
    line-height: 28.13px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
