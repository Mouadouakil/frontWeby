import React from 'react'
import './AboutEvent.css';
function aboutEvent({data}) {
    return (
        <div className='aboutEvent'>
            <h1>Description</h1>
            <p> 
            {data.description}
         
            </p>
            <p><span>Vous pouvez joindre vos supports à l'avance ou les distribuer en direct pendant le webinaire.!</span></p>


        </div>
    )
}

export default aboutEvent
