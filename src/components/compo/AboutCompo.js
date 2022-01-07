import React from 'react'
import './speakers.css';
import img from '../../images/img-1.jpg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function AboutCompo() {
    return (

        <div className='speakers'>
            <h1>Notre Team</h1>
            
            <div className='speakers-section'>
            <Box sx={{ flexGrow: 5 }}>
      <Grid container spacing={{ xs: 1, md: 5 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={1} sm={3} md={4} key={index} >
              
              <div className='speaker-img'><img src={img} alt='hello'></img></div>

              <div className='speaker-text'>Mouad Ouakil</div>    
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>

        </div>
    )
}

export default AboutCompo
