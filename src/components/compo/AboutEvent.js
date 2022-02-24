import React from 'react'
import './AboutEvent.css';
function aboutEvent({data}) {
    return (
        <div className='aboutEvent'>
            <h1>Description</h1>
            <h4> 
            {data.description}
         
            </h4>
            <h5><span>Vous pouvez joindre vos supports à l'avance ou les distribuer en direct pendant le webinaire.!</span></h5>


        </div>
    )
}

export default aboutEvent
