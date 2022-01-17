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
  const allCategories = ['Management', 'IT' , 'Sciences' , 'Politique'];
  const [buttons, setButtons] = useState(allCategories);
  
  
  
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMenuItem(response.data);
    });
  }, []);

  if (!menuItem) return null;
  


  const filter = (button) =>{
   if(button === 'IT'){
      button = 2 
    }
    if(button === 'Management'){
      button = 1
      return;
    }
    if(button === 'Sciences'){
      button = 3
      return;
    }
    if(button === 'Politique'){
      button = 1
      return;
    }
    
    
    const filteredData = menuItem.filter(item => item.categorie ===  button);
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
