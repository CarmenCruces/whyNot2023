import './App.css';
// import Home from './views/Home';
import React from 'react';
 import Navbar from './component/Navbar';
 import Card from './component/Card';
 import Footer from './component/Footer';
import Home from './views/Home';



function App() {
  return (
    <div>
           <Navbar />
            <Card />
            <Footer />
  
    
    
    <div className="App">
      <Home />
    </div>
    </div>
  );
}

export default App;
