import React from 'react';

function GuestPage() {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Welcome Guest</h2>
      <p>You can browse available flight details here.</p>
      <ul>
        <li>IndiGo - Delhi to Mumbai - ₹4500</li>
        <li>Air India - Bengaluru to Chennai - ₹3200</li>
        <li>SpiceJet - Kolkata to Pune - ₹3900</li>
      </ul>
      <p><strong>Login</strong> to book your ticket.</p>
    </div>
  );
}

export default GuestPage;