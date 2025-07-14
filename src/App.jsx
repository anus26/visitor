import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Visitor from './pages/Visitor';
import Home from './pages/Home';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

const App = () => {
  return (
<>
    <BrowserRouter>
<Navigation/>
<Routes>
  <Route path='/' excat element={<Home/>}/>
  <Route path='/Dashboard' excat element={<Dashboard/>}/>
  <Route path='/Visitor' excat element={<Visitor/>}/>
</Routes>
    <Footer />
    </BrowserRouter>
</>
  )
}

export default App



