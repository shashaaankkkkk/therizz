import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmptyOrderHistory = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/user/listing'); // Update path to your shopping page route
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center' }}>
      
      {/* Centered Image */}
      <img src="../src/assets/EmptyBox.png" alt="Empty Order Icon" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />

      {/* Message */}
      <p style={{  fontSize: '16px' }}>Your order history is waiting to be filled</p>

      {/* Start Shopping Button */}
      <button 
        onClick={handleStartShopping}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          color: 'white',
          backgroundColor: 'black',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Start Shopping
      </button>
    </div>
  );
};

export default EmptyOrderHistory;
