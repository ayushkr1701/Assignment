import React from 'react'
import NavBar from './components/Molecules/Navbar'
import BreastCancer from './components/Pages/BreastCancer'
import HeartDisease from './components/Pages/HeartDisease'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>} />
         <Route path="/hd" element={ <HeartDisease/> } />
         <Route path="/bc" element={ <BreastCancer/> } />
      </Routes>
    </Router>
  );
}

export default App