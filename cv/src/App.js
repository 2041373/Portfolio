import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
            <Navbar />
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/expeience' element={<Experience />} /> 
            <Route path='/projects' element={<Projects />} /> 

          </Routes>
      </Router>


    </div>
  );
}

export default App;
