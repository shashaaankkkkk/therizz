// footer.jsx

import React from "react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <div style={styles.logoSection}>
            <div style={styles.logoBox}>
              <span style={styles.logoText}>ඞ</span>
            </div>
            <h4 style={styles.title}>THE RIZZ</h4>
          </div>
          <p style={styles.description}>
            The Rizz is an Online Shopping Store for clothes, shoes etc...
          </p>
          <div style={styles.socialIcons}>
            <a
              href="https://github.com/shashaaankkkkk/therizz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/the_rizz07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={styles.icon} />
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube style={styles.icon} />
            </a>
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
            <li style={styles.listItem}>
              <Link
                to="/profile/account"
                style={{ color: "#666", textDecoration: "none" }}
              >
                My Account
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link
                to="/profile/orders"
                style={{ color: "#666", textDecoration: "none" }}
              >
                Checkout
              </Link>
            </li>
            <li style={styles.listItem}>
              <Link
                to="/user/cart"
                style={{ color: "#666", textDecoration: "none" }}
              >
                Cart
              </Link>
            </li>
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
        <p>© 2024 The Rizz. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Styles for the Footer component
const styles = {
  footer: {
    backgroundColor: "#ffffff",
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
};

export default Footer;
