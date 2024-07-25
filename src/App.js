import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Signin from './components/Signin/Signin'
import Home from './components/Home/Home'
import Scooby from './components/Scooby/Scooby'
import Counter from './components/Counter/Counter'
import Calculator from './components/Calculator/Calculator'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Color from './components/Color/Color';


function App() {
  let demo = "Hello";

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/doo" element={<Scooby />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/color" element={<Color />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
