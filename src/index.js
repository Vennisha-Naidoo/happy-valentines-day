import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home/Home';
import Anime from './Pages/Anime';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> } />
        <Route index element={ <Home /> } />
        <Route path="anime" element={<Anime />} /> 
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
