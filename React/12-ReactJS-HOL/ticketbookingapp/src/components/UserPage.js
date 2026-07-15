import React from 'react';

function UserPage() {
  const handleBooking = () => {
    alert('Ticket booked successfully!');
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Welcome, User</h2>
      <p>Here are your available flights for booking:</p>
      <ul>
        <li>
          IndiGo - Delhi to Mumbai - ₹4500
          <button onClick={handleBooking} style={{ marginLeft: '10px' }}>Book</button>
        </li>
        <li>
          Air India - Bengaluru to Chennai - ₹3200
          <button onClick={handleBooking} style={{ marginLeft: '10px' }}>Book</button>
        </li>
        <li>
          SpiceJet - Kolkata to Pune - ₹3900
          <button onClick={handleBooking} style={{ marginLeft: '10px' }}>Book</button>
        </li>
      </ul>
    </div>
  );
}

export default UserPage;