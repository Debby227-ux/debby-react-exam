import React from 'react'
import NavBar from './component/NavBar'
import { Routes, Route } from "react-router-dom";
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './data/pages/Home';

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
    </div>
  )
}

export default App