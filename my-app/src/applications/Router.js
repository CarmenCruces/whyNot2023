import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from '../App';
import AboutUs from '..views/AboutUs';
import Login from '..views/Login';



function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path= '/' element={<App/>}/>
            <Route path= '/About' element={<AboutUs />}/>
            <Route path= '/Login' element={<Login />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router