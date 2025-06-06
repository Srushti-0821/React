import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../All.css'

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.Auth);
  console.log(currentUser);

  function handleout(e)
  {
      alert('Logout successfully')
  }

  return (
    <div className="navbarContainer">
      <div className="logo">
        <Link to="/" className="navLink">🏠 Home</Link>
      </div>
      {currentUser?.role === "Admin" && (
        <div>
          <Link to="/add" className="navLink">➕ Add Product</Link>
        </div>
      )}
      <div>
        <Link to="/product" className="navLink">🛒 Products</Link>
      </div>
      <div>
        <Link to="/signIn">
          <button className="btnFilled">Sign In</button>
        </Link>
      </div>
      <div>
        <Link to="/signUp">
          <button className="btnOutline">Sign Up</button>
        </Link>

        <button onClick={handleout}>Logout</button>

      </div>
    </div>
  );
};

export default Navbar;