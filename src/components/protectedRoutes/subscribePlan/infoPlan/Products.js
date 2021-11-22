import { useState } from 'react';
import InfoContainer from './InfoContainer';

export default function Products({ selectedInfo, setSelectedInfo }) {
    const choices = ['Chás', 'Incensos', 'Produtos orgânicos'];
    const [selected, setSelected] = useState([false, false, false]);

    function checkBox(e, i) {
        e.stopPropagation();
        let newSelected = selected;
        if (newSelected[i]) {
            newSelected[i] = false;
            let newInfo = selectedInfo.products;
            newInfo = newInfo.filter((product) => product !== choices[i]);
            setSelectedInfo({ ...selectedInfo, products: newInfo });
        } else {
            newSelected[i] = true;
            const newInfo = selectedInfo.products;
            newInfo.push(choices[i]);
            setSelectedInfo({ ...selectedInfo, products: newInfo });
        }
        setSelected([...newSelected]);
    }
    return (
        <InfoContainer
            name="Produtos"
            checkBox={checkBox}
            choices={choices}
            selected={selected}
        />
    );
}
