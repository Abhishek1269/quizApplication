import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import Question from './components/Question';
import Result from './components/Result';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Quiz/>} />
          <Route path="/question" element={<Question/>} />
          <Route path="/result" element={<Result/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;