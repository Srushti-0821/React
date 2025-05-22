import Footer from "./Footer";
import { useEffect } from 'react';

function About() {

     useEffect(() => {
            document.title = "About | Srushti";
          }, []); 

  return (
    <div style={{ padding: '20px' }}>
      <h1> About Me</h1>
      <p>I am a frontend developer skilled in HTML, CSS, JavaScript, and React.</p>
      <p>I enjoy building responsive and user-friendly web applications. I'm currently exploring React Router, API integration, and theme switching using `useContext`.</p>
      <p>Outside coding, I love working on creative projects and learning new technologies.</p>      <Footer />
    </div>
  );
}

export default About;