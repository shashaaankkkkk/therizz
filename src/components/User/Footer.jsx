// footer.jsx

import React from "react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <div style={styles.logoSection}>
            <div style={styles.logoBox}>
              <span style={styles.logoText}>E</span>
            </div>
            <h4 style={styles.title}>Ecommerce</h4>
          </div>
          <p style={styles.description}>
            DevCut is a YouTube channel for practical project-based learning.
          </p>
          <div style={styles.socialIcons}>
            <FaGithub style={styles.icon} />
            <FaInstagram style={styles.icon} />
            <FaYoutube style={styles.icon} />
          </div>
        </div>
        <div style={styles.section}>
          <h4 style={styles.heading}>Support</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>FAQ</li>
            <li style={styles.listItem}>Terms of use</li>
            <li style={styles.listItem}>Privacy Policy</li>
          </ul>
        </div>
        <div style={styles.section}>
          <h4 style={styles.heading}>Company</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>About us</li>
            <li style={styles.listItem}>Contact</li>
            <li style={styles.listItem}>Careers</li>
          </ul>
        </div>
        <div style={styles.section}>
          <h4 style={styles.heading}>Shop</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>My Account</li>
            <li style={styles.listItem}>Checkout</li>
            <li style={styles.listItem}>Cart</li>
          </ul>
        </div>
        <div style={styles.paymentSection}>
          <h4 style={styles.heading}>Accepted Payments</h4>
          <div style={styles.payments}>
            <span style={styles.paymentIcon}>💳</span>{" "}
            {/* Replace with actual icons */}
            <span style={styles.paymentIcon}>AMEX</span>
            <span style={styles.paymentIcon}>VISA</span>
          </div>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p>© 2023 DevCut. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f9f9f9",
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "1200px",
    margin: "0 auto",
    flexWrap: "wrap",
  },
  section: {
    flex: "1",
    minWidth: "150px",
    marginBottom: "20px",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoBox: {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "5px",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
  },
  logoText: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  description: {
    color: "#666",
    margin: "10px 0",
    fontSize: "14px",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
    justifyContent: "center",
  },
  icon: {
    fontSize: "20px",
    color: "#666",
    cursor: "pointer",
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    textAlign: "center",
  },
  listItem: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "8px",
    cursor: "pointer",
  },
  paymentSection: {
    textAlign: "center",
  },
  payments: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
    justifyContent: "center",
  },
  paymentIcon: {
    fontSize: "16px",
    color: "#666",
  },
  footerBottom: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#666",
  },
  "@media (max-width: 768px)": {
    container: {
      flexDirection: "column",
      alignItems: "center",
    },
    section: {
      textAlign: "center",
    },
    socialIcons: {
      justifyContent: "center",
    },
    payments: {
      justifyContent: "center",
    },
  },
};

export default Footer;
