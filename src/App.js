import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <PortfolioContainer/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;