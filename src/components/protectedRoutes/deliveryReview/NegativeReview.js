import { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import reviewImage from '../../../assets/image01.jpg';
import { postReview } from '../../../services/api';
import styled from 'styled-components';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import UserContext from '../../../contexts/UserContext';
dayjs.extend(utc);

export default function NegativeReview() {
    const { state } = useLocation();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [selected, setSelected] = useState([false, false]);
    const complaints = ['Entrega atrasada', 'Não gostei do que recebi'];
    const [body, setBody] = useState({
        date: state?.date,
        review: false,
        complaint: '',
        comments: '',
    });

    useEffect(() => {
        if (!state || state.from !== '/detalhes-plano/avaliar') {
            navigate('/planos');
            return null;
        }
    }, []);

    function handleClick(i) {
        let newSelected = selected;
        if (selected[i]) {
            newSelected[i] = false;
            setBody({ ...body, complaint: '' });
        } else {
            newSelected = [false, false];
            newSelected[i] = true;
            setBody({ ...body, complaint: complaints[i] });
        }
        setSelected([...newSelected]);
    }

    function evaluate() {
        if (!Object.values(body).includes('')) {
            const promise = postReview(user.token, body);
            promise.then(() => {
                alert('Avaliação enviada com sucesso');
                navigate('/detalhes-plano/avaliar', {
                    state: { from: '/detalhes-plano/avaliar/comentarios' },
                });
            });
        }
    }

    return (
        <PageContainer>
            <Title>Parece que houve um problema com a sua entrega</Title>
            <Description>
                Nem sempre acertamos, por isso a sua avaliação é essencial.
            </Description>
            <InfoContainer>
                <img
                    src={reviewImage}
                    alt="Pessoa com camisa verde meditando"
                />
                <Date>
                    Box: {dayjs(state?.date).utc().format('DD/MM/YYYY')}
                </Date>
                <Choices>
                    <Choice>
                        <CheckBox
                            onClick={() => handleClick(0)}
                            $selected={selected[0]}
                        />
                        <span>{complaints[0]}</span>
                    </Choice>
                    <Choice>
                        <CheckBox
                            onClick={() => handleClick(1)}
                            $selected={selected[1]}
                        />
                        <span>{complaints[1]}</span>
                    </Choice>
                </Choices>
                <Comments
                    placeholder="Comentários"
                    onChange={(e) =>
                        setBody({ ...body, comments: e.target.value })
                    }
                    value={body.comments}
                />
            </InfoContainer>
            <Button onClick={evaluate}>Avaliar</Button>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    height: 436px;
    background-color: white;
    padding: 6px 20px;
    text-align: center;
    margin-top: 15px;

    img {
        width: 326px;
        height: 152px;
        object-fit: cover;
    }
`;

const Date = styled.span`
    display: inline-block;
    font-weight: 400;
    font-size: 24px;
    line-height: 28.13px;
    color: #8c97ea;
    margin-top: 9px;
`;

const Choices = styled.div`
    display: flex;
    margin-top: 12px;

    div:first-child {
        margin-right: 12px;
    }
`;

const Choice = styled.div`
    display: flex;
    text-align: left;

    span {
        font-weight: 400;
        font-size: 18px;
        line-height: 21.09px;
        color: #4d65a8;
        height: 23px;
        width: 139px;
    }
`;

const CheckBox = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 6px;
    background-color: ${({ $selected }) => ($selected ? 'green' : '#e0d1ed')};
`;

const Comments = styled.textarea`
    width: 100%;
    height: 160px;
    background-color: #e0d1ed;
    border-radius: 5px;
    margin-top: 33px;
    padding: 10px;
    outline: none;
    border: none;
    resize: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.09px;

    &::placeholder {
        color: #4d65a8;
    }
`;

const Button = styled.button`
    width: 168px;
    height: 39px;
    background-color: #8c97ea;
    border-radius: 10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28.13px;
    margin-top: 5px;
`;
