import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import InfoContainer from './InfoContainer';

export default function Plan({ selectedInfo, setSelectedInfo }) {
    const { state } = useLocation();
    const choices = ['Semanal', 'Mensal'];
    const [selected, setSelected] = useState([false, false]);

    useEffect(() => {
        if (state === 'weekly') {
            setSelected([true, false]);
            setSelectedInfo({ ...selectedInfo, planType: choices[0] });
        }
        if (state === 'monthly') {
            setSelected([false, true]);
            setSelectedInfo({ ...selectedInfo, planType: choices[1] });
        }
    }, []);

    function checkBox(e, i) {
        e.stopPropagation();
        let newSelected = selected;
        if (newSelected[i]) {
            newSelected[i] = false;
            setSelectedInfo({ ...selectedInfo, planType: '' });
        } else {
            newSelected = [false, false];
            newSelected[i] = true;
            setSelectedInfo({ ...selectedInfo, planType: choices[i] });
        }
        setSelected([...newSelected]);
    }

    return (
        <InfoContainer
            name="Plano"
            checkBox={checkBox}
            choices={choices}
            selected={selected}
        />
    );
}
