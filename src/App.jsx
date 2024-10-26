import React from 'react';
import './App.css'
import { BrowserRouter as  Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './pages/Home.jsx';
import Detail from './components/Detail.jsx';
import Header from './components/Header.jsx';

function App() {

  return (
    <BrowserRouter
    basename = {process.env.PUBLIC_URL}>
      <Header />
      <div className='app'>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path='/movie/:id' element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
