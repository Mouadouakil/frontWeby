import React from 'react'
import './speakers.css';
import img from '../../images/img-1.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function AboutCompo() {
    return (

        <div className='speakers'>
           
            
            <div className='speakers-section'>
            <Box sx={{ flexGrow: 5 }}>
      <Grid container spacing={{ xs: 1, md: 5 }} columns={{ xs: 2, sm: 8, md: 12 }}>
     
          <Grid item xs={1} sm={3} md={4}  >
              
              <div className='speaker-img'><img src="https://media-exp1.licdn.com/dms/image/C4D03AQEkfLxa4toACA/profile-displayphoto-shrink_200_200/0/1640356632372?e=1648080000&v=beta&t=xQf73PJzjcEj6eFwhM5ClgY2L4NsY6bA3TJEEnI-juY" alt='hello'></img></div>

              <div className='speaker-text'>Mouad Ouakil</div>    
          </Grid>

          <Grid item xs={1} sm={3} md={4}  >
              
              <div className='speaker-img'><img src="https://media-exp1.licdn.com/dms/image/C4D03AQG5LRXTQiGPMA/profile-displayphoto-shrink_200_200/0/1628509506881?e=1648080000&v=beta&t=RZH6kIjH_8XdYvQrYhxRWvNCmWtyNIiLs3lKsRfT42Q" alt='hello'></img></div>

              <div className='speaker-text'>Asmaa Amara</div>    
          </Grid>


          <Grid item xs={1} sm={3} md={4}  >
              
              <div className='speaker-img'><img src="https://media-exp1.licdn.com/dms/image/C5603AQFy0auJ113rTQ/profile-displayphoto-shrink_100_100/0/1624554645887?e=1648080000&v=beta&t=-WpLM5rywaBRGs52XL733Arf8Aeq3oFBOwntInH6qr4" alt='hello'></img></div>

              <div className='speaker-text'>Ali Ouahli</div>    
          </Grid>


          <Grid item xs={1} sm={3} md={4}  >
              
              <div className='speaker-img'><img src={img} alt='hello'></img></div>

              <div className='speaker-text'>Aboubaker Kassrioui</div>    
          </Grid>


          <Grid item xs={1} sm={3} md={4}  >
              
              <div className='speaker-img'><img src={img} alt='hello'></img></div>

              <div className='speaker-text'>Hassan Badir</div>    
          </Grid>

          <Grid item xs={1} sm={3} md={4}  >
              
              <div className='speaker-img'><img src={img} alt='hello'></img></div>

              <div className='speaker-text'>Ensa Tanger</div>    
          </Grid>
     
      </Grid>
    </Box>
    
    </div>
        </div>
    )
}

export default AboutCompo
