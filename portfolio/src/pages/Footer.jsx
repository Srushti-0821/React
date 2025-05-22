import React from 'react';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', marginTop: '40px', background: '#f0f0f0' }}>
      <p>&copy; {new Date().getFullYear()} Srushti's Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;