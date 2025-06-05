import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Header from './includes/Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard.js';

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}