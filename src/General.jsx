import React from "react";
import Footer from './Components/Footer';
import About from './Components/About';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Portafolio from './Components/Portafolio';
import Services from './Components/Services';
import Price from './Components/Price/'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

const General =()=>{
    return(
        <>
        <Router>
            <Routes>
            <Route path='/Header' element={ <Header /> } />
          <Route path='/Portafolio' element={ <Portafolio /> } />
          <Route path='/' element={<NavBar />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Price' element={<Price />} />
          <Route path='/Footer' element={<Footer />} />
            </Routes>
        </Router>
        
        </>
    )
}

export default General;