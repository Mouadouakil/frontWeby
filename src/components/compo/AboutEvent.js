import React from 'react'
import './AboutEvent.css';
function aboutEvent({data}) {
    return (
        <div className='aboutEvent'>
            <h1>About this event</h1>
            <p> 
            {data.description}

            </p>
            <p><h3>Join us!
            As an attendee
                You must RSVP in this event, and get a ticket in our Eventbrite page.</h3></p>


        </div>
    )
}

export default aboutEvent
