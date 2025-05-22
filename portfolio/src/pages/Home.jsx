import Footer from "./Footer";
import { useEffect } from 'react';

function Home() {

    useEffect(() => {
        document.title = "Home | Srushti";
      }, []);    

  return (
    <div style={{ padding: '20px' }}>
      <h1> Welcome to My Website</h1>
      <p>Hello! I'm Srushti, a passionate web developer. This website showcases my journey, projects, and how you can get in touch with me.</p>
      <p>Use the navigation above to explore more about me or view my recent work.</p>      <Footer />
    </div>
  );
}

export default Home;