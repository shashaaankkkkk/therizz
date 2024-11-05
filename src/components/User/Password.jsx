// Password.jsx

import React from "react";

const PasswordChange = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Change Password</h1>
      <div style={styles.inputGroup}>
        <h2 style={styles.subHeading}>New Password</h2>
        <input
          type="password"
          placeholder="Enter new password"
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <h2 style={styles.subHeading}>Confirm Password</h2>
        <input
          type="password"
          placeholder="Confirm new password"
          style={styles.input}
        />
      </div>
      <button style={styles.button}>Change Password</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#fff",
    color: "#000",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2.5em",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "1.5em",
    marginBottom: "10px",
  },
  inputGroup: {
    width: "300px",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #000",
    fontSize: "1em",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "1em",
    cursor: "pointer",
  },
};

export default PasswordChange;
