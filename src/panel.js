import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Dashboard from './Dashboard';
import Footer from './Footer';

function panel() {
   return <div class="wrapper">
    <Header/>
    <Menu/>
    <Dashboard/>
    <Footer/>
  </div>
}
export default panel;
