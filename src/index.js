import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Stateful from './Stateful';
import App from './App';
import TryOut from './TryOut';
// import ImageSliderTestPage from './ImageSliderTestPage';
import ImageSlider from './ImageSlider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>

      <Route index path='/' element={<Stateful />} />
      <Route path='#stateful' element={<App />} />
      <Route path='/testo' element={<TryOut />} />
      <Route path='/image' element={<ImageSlider />} />

    </Routes>
  </HashRouter>
);

reportWebVitals();
