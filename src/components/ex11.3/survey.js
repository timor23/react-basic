import React from 'react';
import CheckBox from './checkBox';

const Survey = () => {

    return (
        <form>
            <CheckBox text={"I read the terms of the app"} isChecked={false}/>
        </form>
    )
}

export default Survey;