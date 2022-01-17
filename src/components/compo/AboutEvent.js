import React from 'react'
import './AboutEvent.css';
function aboutEvent({data}) {
    return (
        <div className='aboutEvent'>
            <h1>Description</h1>
            <p> 
            {data.description}
            Panoplie d’engagement diversifiée
            Partagez votre caméra, créez des sondages et des enquêtes, posez et répondez aux questions en direct ou dessinez directement sur l'écran.
            Un logiciel de webinaires facile à configurer
La plate-forme de conférences virtuelles GoToWebinar offre des modes de webinaires polyvalents, des fonctionnalités interactives, des outils d’analyse pointus, des intégrations performantes et plus encore.
            </p>
            <p><h3>Vous pouvez joindre vos supports à l'avance ou les distribuer en direct pendant le webinaire.</h3></p>


        </div>
    )
}

export default aboutEvent
