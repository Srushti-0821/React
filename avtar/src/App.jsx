import React from 'react';
import UserCard from './Componenet/UserCard';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      
      <UserCard
        avatar="https://randomuser.me/api/portraits/women/30.jpg"
        description="Sara Liu is a startup founder passionate about AI, innovation, and empowering young minds."
      />
      
    </div>
  );
}

export default App;