import styled from 'styled-components';
import reviewImage from '../../../assets/image01.jpg';

export default function Review() {
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
                <Box>
                    <span>Box: dd/mm/aaaa</span>
                    <ReviewsContainer>
                        <ReviewBox>🙏</ReviewBox>
                        <ReviewBox>👎</ReviewBox>
                    </ReviewsContainer>
                </Box>
                <Box>
                    <span>Box: dd/mm/aaaa</span>
                    <ReviewsContainer>
                        <ReviewBox>🙏</ReviewBox>
                        <ReviewBox>👎</ReviewBox>
                    </ReviewsContainer>
                </Box>
                <Box>
                    <span>Box: dd/mm/aaaa</span>
                    <ReviewsContainer>
                        <ReviewBox>🙏</ReviewBox>
                        <ReviewBox>👎</ReviewBox>
                    </ReviewsContainer>
                </Box>
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
    }
`;

const ReviewBox = styled.div`
    width: 52px;
    height: 45px;
    background-color: #e0d1ed;
    border-radius: 5px;
    font-size: 24px;
    line-height: 28.13px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
`;
