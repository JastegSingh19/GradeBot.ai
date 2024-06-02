import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;