import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Header from './includes/Header.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard.js';
import Integration from './pages/Integration.js';

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/integration" element={<Integration />}>
      </Routes>
    </Router>
  );
};