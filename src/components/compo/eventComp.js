import React from 'react'
import './eventComp.css';
import { FaFacebook,FaGithub,FaGoogle, FaTwitter,FaChalkboardTeacher,FaCalendarAlt } from 'react-icons/fa';





function EventComp({data}) {
    return (
        
        <div className='eventSection1'>
                <h4 style={{ fontSize :'40px'}}> <FaChalkboardTeacher/>          {data.title}</h4>
                <br
                ></br>
                 <br
                ></br>
                {/* <h6> {data.description}</h6> */}
               
                <h4> <FaCalendarAlt/> {data.datevent}</h4>
                <br
                ></br>
               <h4>     <FaFacebook/> &nbsp; <FaGoogle/> &nbsp; <FaGithub/> &nbsp; <FaTwitter/>
</h4> 
<br
                ></br>



        {data.categorie === 2 &&
            
            <h4>Categorie : Management</h4>
            
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
