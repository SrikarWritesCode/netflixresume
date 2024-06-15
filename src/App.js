import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import ServicesSection from './components/ServicesSection';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ServicesSection />
      <MainSection />
    </div>
  );
};

export default App;
