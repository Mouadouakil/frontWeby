import React from 'react';
import EventComp from'../compo/eventComp.js';
import RSVP from '../compo/RSVP.js';
import Speakers from '../compo/speakers.js';
import AboutEvent from '../compo/AboutEvent.js';
import Footer from '../compo/Footer.js';

export default function Event() {
  return (
    <>
      <EventComp/>
      <RSVP/>
      <Speakers/>
      <AboutEvent/>
      <Footer/>
    </>
  );
}
