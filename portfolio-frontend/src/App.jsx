import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageThree from './pages/PageThree';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scroll" element={<PageThree />} />
      </Routes>
    </>
  );
}

export default App;