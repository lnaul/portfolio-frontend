import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageThree from './pages/PageThree';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import DeveloperButton from './components/DeveloperButton';

function App() {
  return (
    <>
      <CustomCursor />
      <DeveloperButton />
      <Header />
      <AudioPlayer />
      <Routes>
        <Route path="/" element={<PageThree />} />
        <Route path="/scroll" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;