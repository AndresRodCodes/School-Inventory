import React from 'react';
import './Tab.css'

const Tab = ({ text, onClick}) => {
    return(
        <button className='tabBtn' onClick={onClick}>{text}</button>
    )
}

export default Tab