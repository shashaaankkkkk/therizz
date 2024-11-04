import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderFail = () => {
  const navigate = useNavigate();

  const handleGoToAccount = () => {
    navigate('/my-account');
  };

  return (
    <div>
      {/* Failure Banner */}
      <div style={{ backgroundColor: '#f8d7da', color: 'black', padding: '10px', textAlign: 'left', fontSize: '18px', height: '111px' }}>
        <p style={{ marginLeft: '38px', paddingLeft: '15px', fontWeight: 'bolder', marginTop: '20px', fontSize: '21px' }}>Order Failed</p>
        
        {/* Breadcrumb */}
        <p style={{ marginLeft: '38px', paddingLeft: '15px', fontSize: '14px', color: '#555', marginTop: '5px' }}>
          The Rizz &gt; Order Failed
        </p>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center' }}>
        
        {/* Failure Icon */}
        <img src="..\src\assets\NoBox.png" alt="Order Failed Icon" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />

        {/* Failure Message */}
        <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>We're sorry, your order could not be processed.</h2>
        <p style={{ fontSize: '14px', marginTop: '9px' }}>Please check your payment details or try again later.</p>

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

export default OrderFail;
