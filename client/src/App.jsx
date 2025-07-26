 // App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './signup'; // Make sure the path is correct
import Login from './login';
 



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
