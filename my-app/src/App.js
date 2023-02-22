import './App.css';
import Home from './Component/Home';
import Card from './Component/Card';
import Abaut from './Component/Abaut';
import Register from './Component/Register';
import Login from './Component/Login';


function App() {
  return (
    <div className="App">
      <Home />
      <Card />
      <Abaut />
      <Register />
      <Login />
    </div>
  );
}

export default App;
