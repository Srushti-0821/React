import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <h1>
        Welcome to Our Web Application
      </h1>

      <p style={{ fontSize: '18px', marginTop: '20px', lineHeight: '1.6' }}>
        This platform is designed to offer a seamless and efficient experience. Whether you’re here to explore,
        manage, or interact, we’ve got the right tools for you. Our goal is to simplify your work and improve productivity.
      </p>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ color: 'teal' }}>✨ Features You’ll Love:</h2>
        <ul style={{ fontSize: '16px', marginTop: '10px' }}>
          <li>✔️ Clean and user-friendly interface</li>
          <li>✔️ Easy navigation and responsive design</li>
          <li>✔️ Secure login and signup functionality</li>
          <li>✔️ Real-time updates and notifications</li>
          <li>✔️ Role-based dashboard and data handling</li>
        </ul>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2 style={{ color: 'teal' }}>🚀 Get Started Now</h2>
        <p style={{ fontSize: '16px' }}>
          Head over to the <strong>Signup</strong> page to create an account or <strong>Sign in</strong> if you're already registered.
          Explore your dashboard, add or manage content, and take full control with just a few clicks.
        </p>
      </section>

      <section style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h3 style={{ color: 'black' }}>📞 Need Help?</h3>
        <p>Our support team is here to help you 24/7. Visit the <strong>Contact</strong> page or email us at <a href="mailto:support@example.com">support@example.com</a>.</p>
      </section>

      <footer style={{ marginTop: '50px', fontSize: '14px', color: 'gray' }}>
        © {new Date().getFullYear()} All Rights Reserved. Built with ❤️ by Srushti.
      </footer>
    </div>
  );
};

export default Home;