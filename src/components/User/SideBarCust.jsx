import React from 'react';

const Sidebar2 = () => {
  return (
    <div style={styles.sidebarContainer}>
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          style={styles.sidebarItem}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
        >
          {/* Placeholder Icon - Replace src with actual icons */}
          <img src={item.icon} alt={`${item.label} Icon`} style={styles.icon} />
          <span style={styles.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

// Sidebar items with labels and placeholder icon sources
const sidebarItems = [
  { label: 'Orders', icon: '../src/assets/Cart.svg' },
  { label: 'Wishlist', icon: '../src/assets/Heart.svg' },
  { label: 'Address', icon: '../src/assets/Delivery.svg' },
  { label: 'Password', icon: '../src/assets/Key.svg' },
  { label: 'Account Detail', icon: '../src/assets/User.svg' },
  { label: 'Logout', icon: '../src/assets/Logout.svg' },
];

// CSS-in-JS styles for the sidebar
const styles = {
  sidebarContainer: {
    width: '250px',
    backgroundColor: 'white',
    borderRight: '1px solid #ddd',
    padding: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontFamily: 'Arial, sans-serif',
  },
  sidebarItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    width: '100%',
    fontSize: '16px',
    color: 'black',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  icon: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  },
  label: {
    fontWeight: 'normal',
  },
};

export default Sidebar2;
