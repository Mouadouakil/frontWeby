import React from 'react';
import '../../App.css';
import HomeSection1 from '../compo/HomeSection1';
import Upcoming from '../compo/Upcoming';
import Slide from '../compo/Slide';
import items from './AllData';
import ButtonFilter from '../compo/ButtonFilter';
import { useState } from 'react';
import TabComponent from '../compo/TabComponent'
import SearchRegion from '../compo/SearchRegion';
import Footer from '../compo/Footer';


const allCategories = ['All', ...new Set(items.map(item => item.category))];


export default function Home() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }


  return (
    <>
      
      <HomeSection1/>
      <Upcoming/>
      <ButtonFilter button={buttons} filter={filter} />
      <Slide menuItem={menuItem}/>
      <SearchRegion />
      <TabComponent/>
      <Footer/>
    </>
  );
}
