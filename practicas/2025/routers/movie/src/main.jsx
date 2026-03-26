import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import All from './movies/All.jsx';
import Id from './movies/Id.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="movies/all" element={<All />} />
          <Route path='movies/:id' element={<Id/>}></Route>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
