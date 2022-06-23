import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from './components/Gallery/Gallery'
import Menu from './components/Menu/Menu'
import Contact from './components/Contact/Contact';
import OrderOnline from './components/OrderOnline/OrderOnline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="menu" element={<Menu />} />
      <Route path="contact" element={<Contact />} />
      <Route path="order-online" element={<OrderOnline />} />
    </Routes>
  </BrowserRouter>
);
