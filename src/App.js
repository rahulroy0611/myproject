import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from './pages/Overview.js';
import Integration from './pages/Integration.js';
import AssetInventory from './pages/AssetInventory.js';
import ConfigAWS from './configpages/ConfigAWS.js';
import ConfigAzure from './configpages/ConfigAzure.js';
import ConfigGCP from './configpages/ConfigGCP.js';
import ConfigWazuh from './configpages/ConfigWazuh.js';

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/assetinventory" element={<AssetInventory />} />
        <Route path="/configaws" element={<ConfigAWS />} />
        <Route path="/configazure" element={<ConfigAzure />} />
        <Route path="/configgcp" element={<ConfigGCP />} />
        <Route path="/configwazuh" element={<ConfigWazuh />} />
        <Route path="/*" element={<Overview />} />
      </Routes>
    </Router>
  );
};