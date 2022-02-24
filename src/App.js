import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Event from './components/pages/Event';
import Consulting from './components/pages/Consulting';
import AjoutEvent from './ajoutEvent.js';
import AjoutCategorie from './ajoutCategorie';
import Demandes from './demandes.js'
import panel from './panel.js';
import Evenemnets from './evenements';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/About' component={About} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/event/:id' component={Event} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/panel' component={panel} />
        <Route path='/pages/widgets' component={AjoutEvent} />
        <Route path='/Categories' component={AjoutCategorie} />
        <Route path='/demandes' component={Demandes} />
        <Route path='/evenements' component={Evenemnets} />
        
      </Switch>
    </Router>
  );
}

export default App;
