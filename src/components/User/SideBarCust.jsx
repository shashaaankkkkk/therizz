import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar2 = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname); // Tracks active item based on URL path

  return (
    <div style={styles.sidebarContainer}>
      {sidebarItems.map((item, index) => (
        <Link
          to={item.path} // Set destination for each item
          key={index}
          onClick={() => setActiveItem(item.path)} // Update active item when clicked
          style={{
            ...styles.sidebarItem,
            backgroundColor: activeItem === item.path ? '#f0f0f0' : 'white', // Change background color if active
          }}
        >
          <img src={item.icon} alt={`${item.label} Icon`} style={styles.icon} />
          <span style={styles.label}>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

// Sidebar items with labels, icons, and paths
const sidebarItems = [
  { label: 'Orders', icon: '../src/assets/Cart.svg', path: '/profile/orders' },
  { label: 'Wishlist', icon: '../src/assets/Heart.svg', path: '/profile/wishlist' },
  { label: 'Address', icon: '../src/assets/Delivery.svg', path: '/profile/address' },
  { label: 'Password', icon: '../src/assets/Key.svg', path: '/password' },
  { label: 'Account Detail', icon: '../src/assets/User.svg', path: '/profile/YourDetails' },
  { label: 'Logout', icon: '../src/assets/Logout.svg', path: '' },
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
    textDecoration: 'none', // Remove link underline
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
