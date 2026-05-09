import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MassBooking from './pages/MassBooking';
import Donations from './pages/Donations';
import Gallery from './pages/Gallery';
import LiveStream from './pages/LiveStream';
import Testimonies from './pages/Testimonies';
import PrayerRequest from './pages/PrayerRequest';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mass-booking" element={<MassBooking />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/livestream" element={<LiveStream />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/prayer-request" element={<PrayerRequest />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
