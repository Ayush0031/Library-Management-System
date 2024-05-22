import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './pages/Home';


function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/add-book"/>
        <Route path="/add-author"  />
        <Route path="/add-publisher" />
        <Route path="/get-issue-book" />
      </Routes>
    </Router>
  )
}

export default App
