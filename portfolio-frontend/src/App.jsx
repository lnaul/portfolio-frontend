import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageThree from './pages/PageThree';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/scroll" element={<PageThree />} />
    </Routes>
  );
}

export default App;