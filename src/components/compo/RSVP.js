import React from 'react'
import './rsvp.css'
function RSVP({data}) {
    return (
        <div className='rsvp'>
            
            <br></br>
            <br></br>

            <button className='btn3'> <a href={data.link} style={{ color: 'white', textDecoration: 'inherit'}}>Lien de L'Evenement</a></button>
        </div>
    )
}

export default RSVP
