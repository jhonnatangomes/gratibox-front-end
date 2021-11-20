import styled from 'styled-components';
import { HiArrowDown } from 'react-icons/hi';
import { useState } from 'react';

export default function Info({ name, selectedInfo, setSelectedInfo }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState([false, false, false]);
    const info = {
        Plano: ['Semanal', 'Mensal'],
        Entrega: {
            Semanal: ['Segunda', 'Quarta', 'Sexta'],
            Mensal: ['Dia 01', 'Dia 10', 'Dia 20'],
        },
        Produtos: ['Chás', 'Incensos', 'Produtos Orgânicos'],
    };

    function handleClick() {
        setIsOpen(!isOpen);
    }

    function checkBox(e, i) {
        e.stopPropagation();
        let newSelected = selected;
        if (newSelected[i]) {
            setSelectedInfo({ ...selectedInfo, [name]: '' });
            newSelected[i] = false;
        } else {
            newSelected = [false, false, false];
            if (name !== 'Entrega') {
                setSelectedInfo({ ...selectedInfo, [name]: info[name][i] });
            } else {
                setSelectedInfo({
                    ...selectedInfo,
                    [name]: info[name][selectedInfo['Plano']][i],
                });
            }
            newSelected[i] = true;
        }

        setSelected([...newSelected]);
    }

    return (
        <InfoContainer onClick={handleClick}>
            <InfoTitle>
                <span>{name}</span>
                <ArrowIcon $isOpen={isOpen} color="#4D65A8" />
            </InfoTitle>
            {isOpen ? (
                <Choices>
                    {name !== 'Entrega'
                        ? info[name].map((choice, i) => (
                              <Choice key={i}>
                                  <WhiteBox
                                      $selected={selected[i]}
                                      onClick={(e) => checkBox(e, i)}
                                  />
                                  <span>{choice}</span>
                              </Choice>
                          ))
                        : selectedInfo['Plano']
                        ? info['Entrega'][selectedInfo['Plano']].map(
                              (choice, i) => (
                                  <Choice key={i}>
                                      <WhiteBox
                                          $selected={selected[i]}
                                          onClick={(e) => checkBox(e, i)}
                                      />
                                      <span>{choice}</span>
                                  </Choice>
                              )
                          )
                        : ''}
                </Choices>
            ) : (
                ''
            )}
        </InfoContainer>
    );
}

const InfoContainer = styled.div`
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
