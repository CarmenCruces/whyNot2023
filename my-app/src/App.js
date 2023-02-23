import './App.css';
import Home from './views/Home';
import Card from './component/Card';
import About from './component/About';

import Login from './views/Login';


function App() {
  return (
    <div className="App">
      <Home />
    
      <About />
      
      <Login />
    </div>
  );
}

export default App;
