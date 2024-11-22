<<<<<<< HEAD
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
=======
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
>>>>>>> main

const Navbar = () => {
  return (
    <>
      <nav style={styles.navbar}>
        {/* Logo */}
        <Link to="/" style={styles.logoContainer}>
          <span style={styles.logoText}>{">_Penstyl"}</span>
        </Link>

        {/* Other links */}
        <Link to="/tasks" style={styles.navItem}>Tasks</Link>
        <Link to="/about" style={styles.navItem}>About</Link>
        <Link to="/add-task" style={styles.navItem}>Add Task</Link>
        <span style={styles.contributeText}>
        &lt;-- CONTRIBUTE TO THE PLATFORM
        </span>
      </nav>

      {/* Main content */}
      <div style={styles.content}>
        {/* Your main content goes here */}
      </div>
    </>
  );
};

const styles: {
  contributeText: CSSProperties | undefined; navbar: React.CSSProperties; navItem: React.CSSProperties; logoContainer: React.CSSProperties; logoText: React.CSSProperties; content: React.CSSProperties 
} = {
  navbar: {
    display: "flex",
    justifyContent: "flex-start",  // Align items to the left
    alignItems: "center",         // Vertically center the items
    width: "100%",                // Navbar spans the full width
    padding: "10px 0",            // Padding on top and bottom
    backgroundColor: "#333",      // Background color
    position: "fixed",            // Fix the navbar at the top
    top: 0,                       // Position at the top
    left: 0,                      // Position at the left edge
    zIndex: 1000,                 // Ensure it stays above other content
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)", // Optional: Shadow for the navbar
  },
  navItem: {
    padding: "10px 20px",         // Padding for individual items
    margin: "0 10px",             // Margin between items
    textDecoration: "none",       // Remove underline
    color: "white",               // Text color
    backgroundColor: "#555",      // Background color of items
    borderRadius: "5px",          // Border radius for rounded corners
    fontWeight: "bold",           // Bold font weight
    textAlign: "center",          // Text centered within each item
    transition: "background-color 0.3s ease", // Hover effect
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",               // Ensure the logo stays centered
    padding: "10px 20px",         // Padding around the logo
    textDecoration: "none",       // No text decoration on logo link
  },
  logoText: {
    fontFamily: "'Courier New', Courier, monospace", // Monospaced font for techy look
    fontSize: "24px",            // Adjust the font size for the logo
    fontWeight: "bold",          // Bold text for emphasis
    color: "#fff",               // White color for the text
    letterSpacing: "2px",        // Add some spacing between letters
    textTransform: "uppercase",  // Uppercase letters
    borderBottom: "2px solid #fff", // Add an underline effect
    padding: "10px 20px",        // Padding around the logo for spacing
    background: "transparent",   // Transparent background
  },
  contributeText: {
    color: "red",
    fontWeight: "bold",
    fontSize: "0.8rem",  // Small size
    marginLeft: "10px",  // Space between Add Task and the text
    verticalAlign: "middle",  // Align with Add Task link
  },
  content: {
    marginTop: "80px",           // Push content below the navbar (adjust based on navbar height)
    padding: "20px",             // Optional: Add some padding around the content
  },
};

export default Navbar;
