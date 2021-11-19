import styled from 'styled-components';
import weeklyPlanImage from '../../../assets/image04.jpg';
import monthlyPlanImage from '../../../assets/image02.jpg';
import PlanDetails from './PlanDetails';

const plans = [
    {
        img: weeklyPlanImage,
        description:
            'Você recebe um box por semana. Ideal para quem quer exercer a gratidão todos os dias.',
        type: 'weekly',
    },
    {
        img: monthlyPlanImage,
        description:
            'Você recebe um box por mês. \n\nIdeal para quem está começando agora.',
        type: 'monthly',
    },
];

export default function Plans({ user }) {
    return (
        <PageContainer>
            <Title>Bom te ver por aqui, {user.name}</Title>
            <Description>
                Você ainda não assinou um plano, que tal começar agora?
            </Description>
            <PlanDetailsContainer>
                {plans.map((plan, i) => (
                    <PlanDetails
                        key={i}
                        img={plan.img}
                        description={plan.description}
                        type={plan.type}
                    />
                ))}
            </PlanDetailsContainer>
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

const PlanDetailsContainer = styled.div`
    margin-top: 50px;

    & > div:not(:last-child) {
        margin-bottom: 95px;
    }

    & > div:last-child {
        margin-bottom: 30px;
    }
`;
