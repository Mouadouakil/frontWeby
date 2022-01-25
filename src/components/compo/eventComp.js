import React from 'react'
import './eventComp.css';
import { FaFacebook,FaGithub,FaGoogle, FaTwitter,FaChalkboardTeacher,FaCalendarAlt } from 'react-icons/fa';





function EventComp({data}) {
    return (
        
        <div className='eventSection1'>
                <h1 style={{ fontSize :'30px'}}> <FaChalkboardTeacher/>          {data.title}</h1>
                <br
                ></br>
                 <br
                ></br>
                <h2> {data.description}</h2>
                <br
                ></br>
                
                <br
                ></br>
                <h4> <FaCalendarAlt/> {data.datevent}</h4>
                <br
                ></br>
               <h2>     <FaFacebook/> &nbsp; <FaGoogle/> &nbsp; <FaGithub/> &nbsp; <FaTwitter/>
</h2> 
<br
                ></br>



        {data.categorie === 2 &&
            
            <h2>Categorie : Management</h2>
            
          }
           {data.categorie === 1 &&
            
            <h2>Categorie : IT & Tech</h2>
            
          }
           {data.categorie === 3 &&
            
            <h2>Categorie : Politique</h2>
            
          }
    
    
    

<br
                ></br>
        
        
        </div>
    )
}

export default EventComp
