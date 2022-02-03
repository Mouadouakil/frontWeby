import React from 'react'
import './eventComp.css';
import { FaFacebook,FaGithub,FaGoogle, FaTwitter,FaChalkboardTeacher,FaCalendarAlt } from 'react-icons/fa';





function EventComp({data}) {
    return (
        
        <div className='eventSection1'>
                <h1 style={{ fontSize :'40px'}}> <FaChalkboardTeacher/>          {data.title}</h1>
                <br
                ></br>
                 <br
                ></br>
                {/* <h2> {data.description}</h2> */}
               
                <h1> <FaCalendarAlt/> {data.datevent}</h1>
                <br
                ></br>
               <h1>     <FaFacebook/> &nbsp; <FaGoogle/> &nbsp; <FaGithub/> &nbsp; <FaTwitter/>
</h1> 
<br
                ></br>



        {data.categorie === 2 &&
            
            <h1>Categorie : Management</h1>
            
          }
           {data.categorie === 1 &&
            
            <h1>Categorie : IT & Tech</h1>
            
          }
           {data.categorie === 3 &&
            
            <h1>Categorie : Economie</h1>
            
          }
          {data.categorie === 4 &&
            
            <h1>Categorie : Politique</h1>
            
          }
    
    
    

<br
                ></br>
        
        
        </div>
    )
}

export default EventComp
