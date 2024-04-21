import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Materials from './Components/Materials/Materials';
import RecycleCenters from './Components/RecycleCenters/RecycleCenters';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/Recycle_Centers" element={<RecycleCenters/>}/>
          < Route path="/Contactus" element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
