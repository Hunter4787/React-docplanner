import React from 'react';
import logo from './logo.svg';
import './App.css';


/*Components importaion */

import Navdoc from './nav'
import TitleTop from './top-discrpt'
import MainCards from './main-cards'
import LogoMid from './logo-mid'
import MainFlags from './main-flags'
import LowerParg from './lowerparag'
import FooterCard from './officecard'
import Footer from './footer'



function App() {
  return (
    <div>
    <Navdoc />
    <div className="container">
      <TitleTop/>
      <MainCards />
      <LogoMid />
      </div>
      <MainFlags />
      <LowerParg />
      <FooterCard />
      <Footer/>
    </div>
  );
}

export default App;
