import Tab from './Tab'
import React from 'react';
import './Tabs.css'

const Tabs = () => {

    const viewInventory = () => {
        console.log("Clicked on View Inventory Tab")
    }

    return (
        <div className='tabs'>
            <ul>
                <li><Tab text='View Inventory' onClick={viewInventory}/></li>
                <li><Tab text='Check-in to Inventory'/></li>
                <li><Tab text='Check-out Device'/></li>
                <li><Tab text='Add Person'/></li>
                <li><Tab text='Import Devices/People'/></li>
                <li><Tab text='Check into Inventory'/></li>
            </ul>
        </div>
    )
}

export default Tabs
