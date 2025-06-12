import * as React from 'react';
import Header from '../includes/Header.js';

export default function Overview() {
  return (
    <div className="Overview">
          <Header />
          <div style={{ padding: '20px' }}>
            <h1>Overview</h1>
            <p>This page will display the Overview of the Security Posture</p>
            {/* Additional content can be added here */}
          </div>
        </div>
  );
}
