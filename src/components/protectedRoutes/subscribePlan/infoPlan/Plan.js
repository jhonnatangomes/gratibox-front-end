import { useState } from 'react';
import { useLocation } from 'react-router';
import InfoContainer from './InfoContainer';

export default function Plan({ selectedInfo, setSelectedInfo }) {
    const { state } = useLocation();
    const choices = ['Semanal', 'Mensal'];
    const [selected, setSelected] = useState([false, false]);

    function checkBox(e, i) {
        e.stopPropagation();
        let newSelected = selected;
        if (newSelected[i]) {
            newSelected[i] = false;
            setSelectedInfo({ ...selectedInfo, Plano: '' });
        } else {
            newSelected = [false, false];
            newSelected[i] = true;
            setSelectedInfo({ ...selectedInfo, Plano: choices[i] });
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
