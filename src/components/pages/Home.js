import React, {useState } from 'react';
import '../../App.css';
import HomeSection1 from '../compo/HomeSection1';
import Upcoming from '../compo/Upcoming';
import Slide from '../compo/Slide';
import axios from "axios";
import ButtonFilter from '../compo/ButtonFilter';
import TabComponent from '../compo/TabComponent'
import SearchRegion from '../compo/SearchRegion';
import Footer from '../compo/Footer';





export default function Home() {
  


  const baseURL = "http://localhost:5030/Events";
  const [menuItem, setMenuItem] = React.useState(null);
  const [Item, setItem] = React.useState(null);
  const allCategories = ['All','Management', 'IT' , 'Economie' , 'Politique'];
  const [buttons, setButtons] = useState(allCategories);

  
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMenuItem(response.data);
      setItem(response.data);
    });
  }, []);

  if (!menuItem) return null;
  if (!Item) return null;


  const filter = (button) =>{
    var filteredData = null;

    if(button === 'All'){
      filteredData = menuItem.filter(item => item.categorie ===  1 || item.categorie ===  2 || item.categorie ===  3 || item.categorie ===  4);
    }

   if(button === 'IT'){
     filteredData = menuItem.filter(item => item.categorie ===  1);
    }
    if(button === 'Management'){
     filteredData = menuItem.filter(item => item.categorie ===  2);
    }
    if(button === 'Economie'){
     filteredData = menuItem.filter(item => item.categorie ===  3);
    }
    if(button === 'Politique'){
     filteredData = menuItem.filter(item => item.categorie ===  4);
    }
    
    
    
    setItem(filteredData)
  }


  return (
    <>
      <HomeSection1/>
      <Upcoming/>
      <ButtonFilter button={buttons} filter={filter} />
      <Slide menuItem={Item}/>
      <SearchRegion />
      <TabComponent/>
      <Footer/>
    </>
  );
}
