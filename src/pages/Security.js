import * as React from 'react';
import Header from '../includes/Header.js';

export default function Security() {
  return (
    <div className="Security">
          <Header />
          <div style={{ padding: '20px' }}>
            <h1>Security</h1>
            <p>This page will display the Overview of the Security Posture</p>
            {/* Additional content can be added here */}
          </div>
        </div>
  );
}
