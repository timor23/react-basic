import React from 'react';


const CustomButton = ({color, callBack}) => {
    return <input type="button" value={color} style={{backgroundColor: color}} onClick={()=>callBack(color)}/>

}


export default CustomButton;