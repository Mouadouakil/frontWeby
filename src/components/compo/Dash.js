import React from 'react'
import './Dash.css'
import Create from './Create.js'
import EventTable from './EventTable'
function Dash() {
    return (
        <div className='Dash'>
           <Create/>
           <EventTable/>
        </div>
    )
}

export default Dash
