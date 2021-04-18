import React from "react";
import { StyleReset } from 'atomize';

import NavBar from './components/navigation.component';
import WebCam from './components/webcam.component'

import "./App.css";



function App() {
  

  return (
    <div>
      <StyleReset />
      <NavBar/>
      <WebCam/>
    </div>
  );
}

export default App;
