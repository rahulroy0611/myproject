import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from './pages/Overview.js';
import Integration from './pages/Integration.js';

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/*" element={<Overview />} />
      </Routes>
    </Router>
  );
};