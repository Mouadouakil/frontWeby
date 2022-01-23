import React from 'react'
import './speakers.css';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import axios from "axios";
function Speakers({data}) {

//  const baseURL = 'http://localhost:5030/speakers';
//  const [speakers,setSpeakers] = React.useState(null);
//  React.useEffect(() => {
//       axios.get(baseURL).then((response) => {
//         setSpeakers(response.data);
//      });
//    },[baseURL]);
   
//    if (!speakers) return null;




    return (

        <div className='speakers'>
            {/* <h1 style={{ color: 'Red', textDecoration: 'inherit'}}>L 'annonce de L'Evenement : </h1> */}
            
            <div className='speakers-section'>
              <img alt='annonce' src={data.picture}></img>
    </div>

        </div>
    )
}

export default Speakers
