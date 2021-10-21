import React from 'react';
import CheckBox from './checkBox';

const Parent = () => {

    return (
        <div>
            <CheckBox text={"I read the terms of the app"} isChecked={false}/>
            <CheckBox text={"I accept the terms of the app"} isChecked={false}/>
            <CheckBox text={"I want to get the weekly news letter"} isChecked={true}/>
            <CheckBox text={"I want to get sales and offers"} isChecked={true}/>
        </div>
    )
}

export default Parent;