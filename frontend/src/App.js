import React from "react";
import { StyleReset } from 'atomize';

import NavBar from './components/navigation.component';
import WebCam from './components/webcam.component';
import About from './components/about.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./App.css";



function App() {
  

  return (
    <div>
      <Router>
        <StyleReset />
        <NavBar/>
        <Route exact path='/' component={WebCam}/>
        <Route path='/About' component={About}/>
      </Router>
    </div>
  );
}

export default App;
