import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={footerStyle}>
      <p>&copy; {currentYear} Systems and AI Lab, The Ohio State University</p>
    </footer>
  );
};

// Optional: Basic styling to ensure it stays at the bottom and looks consistent
const footerStyle = {
  textAlign: 'center',
  padding: '2rem 0',
  marginTop: 'auto',
  width: '100%',
  color: '#666',
  fontSize: '0.9rem',
  borderTop: '1px solid #eee'
};

export default Footer;