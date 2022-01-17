import React from 'react'
import './speakers.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from "axios";
function Speakers() {

 const baseURL = 'http://localhost:5030/speakers';
 const [speakers,setSpeakers] = React.useState(null);
 React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setSpeakers(response.data);
     });
   },[baseURL]);
   
   if (!speakers) return null;




    return (

        <div className='speakers'>
            <h1>Conférenciers</h1>
            
            <div className='speakers-section'>
            <Box sx={{ flexGrow: 5 }}>
      <Grid container spacing={{ xs: 1, md: 5 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {speakers.map((speaker) => (
          <Grid item xs={1} sm={3} md={4}  >
              
              <div className='speaker-img'><img src={speaker.job} alt='hello'></img></div>

              <div className='speaker-text'>{speaker.fullname} </div>    
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>

        </div>
    )
}

export default Speakers
