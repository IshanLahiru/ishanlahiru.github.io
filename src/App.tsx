import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="home"/>}/>
        <Route path="/" element={<div/>}></Route>
          <Route path="home" element={<div>the home</div>}/>
          <Route path="about" element={<div>the about section</div>}/>
          <Route path="projects" element={<div>the projects section</div>}/>
          <Route path="certificates" element={<div>the certificates section</div>}/>
          <Route path="contact" element={<div>the contact section</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
