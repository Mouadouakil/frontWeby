import React from 'react';
import EventComp from'../compo/eventComp.js';
import RSVP from '../compo/RSVP.js';
import Speakers from '../compo/speakers.js';
import AboutEvent from '../compo/AboutEvent.js';
import Footer from '../compo/Footer.js';
import { useParams } from "react-router-dom";
import axios from 'axios';


export default function Event() {
  
 let params = useParams();
 const id = parseInt(params.id);

 const baseURL = 'http://localhost:5030/search?term='+id;
 const [event,setEvent] = React.useState(null);
 React.useEffect(() => {
      axios.get(baseURL).then((response) => {
       setEvent(response.data);
     });
   },[baseURL]);
   
   if (!event) return null;

  return (


    <>
      
      {event.map((event) => ( <EventComp data={event}/>))}    
      <RSVP/>

      <Speakers/>
      {event.map((event) => ( <AboutEvent data={event}/>))}   
      
      <Footer/>
    </>
  );
}
