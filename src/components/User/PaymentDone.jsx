import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleGoToAccount = () => {
    navigate('/my-account');
  };

  return (
    <div>
      {/* Success Banner */}
      <div style={{ backgroundColor: '#d8e4d4', color: 'black', padding: '10px', textAlign: 'left', fontSize: '18px', height: '111px' }}>
        <p style={{ marginLeft: '38px', paddingLeft: '15px', fontWeight: 'bolder', marginTop: '20px', fontSize: '21px' }}>Order Successful</p>
        
        {/* Breadcrumb */}
        <p style={{ marginLeft: '38px', paddingLeft: '15px', fontSize: '14px', color: '#555', marginTop: '5px' }}>
          The Rizz &gt; Successful Order
        </p>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center' }}>
        
        {/* Success Icon */}
        <img src="..\src\assets\YesBox.png" alt="Order Successful Icon" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />

        {/* Thank You Message */}
        <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Thanks for shopping with us!</h2>
        <p style={{ fontSize: '14px', marginTop: '9px' }}>Your order has been placed successfully and is now being processed</p>

        {/* Go to My Account Button */}
        <button 
          onClick={handleGoToAccount}
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
          Go to My Account
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
