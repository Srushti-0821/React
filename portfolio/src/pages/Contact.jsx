import Footer from "./Footer";
import { useEffect } from 'react';

function Contact() {

    useEffect(() => {
        document.title = "Contect | Srushti";
    }, []); 

  return (
    <div style={{ padding: '20px' }}>
      <h1> Contact Me</h1>
      <p>You can reach me through the following platforms:</p>
      <ul>
        <li>Email: <a href="mailto:srushti@example.com">srushti@example.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com" target="_blank">linkedin.com/in/srushti</a></li>
        <li>GitHub: <a href="https://github.com" target="_blank">github.com/srushti</a></li>
      </ul>
      <Footer />
    </div>
  );
}

export default Contact;