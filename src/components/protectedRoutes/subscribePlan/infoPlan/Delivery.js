import { useState, useEffect } from 'react';
import InfoContainer from './InfoContainer';

export default function Delivery({ selectedInfo, setSelectedInfo }) {
    const plan = selectedInfo['Plano'];
    const [choices, setChoices] = useState([]);
    const [selected, setSelected] = useState([false, false, false]);

    useEffect(() => {
        if (plan === 'Semanal') {
            const dates = ['Segunda', 'Quarta', 'Sexta'];
            setChoices(dates);
        }
        if (plan === 'Mensal') {
            const dates = ['Dia 01', 'Dia 10', 'Dia 20'];
            setChoices(dates);
        }
    }, [plan]);

    function checkBox(e, i) {
        e.stopPropagation();
        let newSelected = selected;
        if (newSelected[i]) {
            newSelected[i] = false;
            setSelectedInfo({ ...selectedInfo, Entrega: '' });
        } else {
            newSelected = [false, false];
            newSelected[i] = true;
            setSelectedInfo({ ...selectedInfo, Entrega: choices[i] });
        }
        setSelected([...newSelected]);
    }

    return (
        <InfoContainer
            name="Entrega"
            checkBox={checkBox}
            choices={choices}
            selected={selected}
        />
    );
}
