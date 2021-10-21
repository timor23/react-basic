import React, {useState} from 'react';

const CheckBox = ({text, isChecked}) => {
    const [checked, setChecked] = useState(isChecked);

    const change = (checked) => {
        setChecked(!checked)
    }

    return (
        <div>
            <input type="checkbox" checked={checked} onChange={() => change(checked)}/>
            <label>{text}</label>
        </div>
    );
}

export default CheckBox;