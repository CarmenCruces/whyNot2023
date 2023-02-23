import React from 'react';
import {Routes, Route} from 'react-router-dom';
import App from '../App';
import AboutUs from '../views/AboutUs';
import Login from '../views/Login';



function Router() {
  return (
    
        <Routes>
            <Route path= '/' element={<App/>}/>
            <Route path= '/AboutUs' element={<AboutUs/>}/>
            <Route path= '/Login' element={<Login/>}/>
        </Routes>
   
  )
}

export default Router