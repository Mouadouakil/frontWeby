import React from 'react'
import './eventComp.css';
import { FaFacebook,FaGithub,FaGoogle, FaTwitter } from 'react-icons/fa';





function EventComp({data}) {
    return (
        
        <div className='eventSection1'>
                <h1>{data.title}</h1>
                <br
                ></br>
                <h2>Event Virtual en Google Meet</h2>
                <br
                ></br>
                <h3>University de Tanger</h3>
                <br
                ></br>
                <h4>{data.datevent}</h4>
                <br
                ></br>
               <h2>     <FaFacebook/> &nbsp; <FaGoogle/> &nbsp; <FaGithub/> &nbsp; <FaTwitter/>
</h2> 
<br
                ></br>


<h2>Categories : IT & Tech</h2>

<br
                ></br>
<h1><button className='btn2'> <a href={data.link}>Link </a></button></h1>
        
        
        </div>
    )
}

export default EventComp
