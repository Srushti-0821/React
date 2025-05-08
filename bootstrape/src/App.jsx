import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`${theme}-theme`}>
      
      {/* Navbar */}
      <Navbar expand="lg" className={`shadow-sm navbar custom-navbar ${theme}-theme-navbar`}>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className='navbar'>
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#electronics">Electronics</NavDropdown.Item>
                <NavDropdown.Item href="#fashion">Fashion</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#all">All Categories</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link disabled>Coming Soon</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" />
            </Form>
            <Button className="ms-3" variant="light" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 ' : '☀️ '}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Home Section */}
      <section id="home" className="p-5">
        <h2>Welcome to Store</h2>
        <p>Your one-stop shop for all categories of products.</p>
      </section>

      {/* Products Section */}
      <section id="products" className="p-5">

        <h2>Products</h2>

        <p>Explore our featured products below:</p>

        <div className="row">

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="Product 1" className="card-img-top" style={{ height: '200px', width: '150px', objectFit: 'contain', margin: '0 auto' }} />
              <div className="card-body">
                <h5 className="card-title">Mens Casual Premium Slim Fit T-Shirts</h5>
                <p className="card-text">This is a placeholder product description for item #1.</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" alt="Product 2" className="card-img-top" style={{ height: '200px', width: '150px', objectFit: 'contain', margin: '0 auto' }} />
              <div className="card-body">
                <h5 className="card-title">Women's Legends Naga Gold & Silver Bracelet</h5>
                <p className="card-text">This is a placeholder product description for item #2.</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" alt="Product 3" className="card-img-top" style={{ height: '200px', width: '150px', objectFit: 'contain', margin: '0 auto' }} />
              <div className="card-body">
                <h5 className="card-title">Rose Gold Plated Tunnel Plug Earrings</h5>
                <p className="card-text">This is a placeholder product description for item #3.</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="Product 4" className="card-img-top" style={{ height: '200px', width: '150px', objectFit: 'contain', margin: '0 auto' }} />
              <div className="card-body">
                <h5 className="card-title">Elements Portable Hard Drive</h5>
                <p className="card-text">This is a placeholder product description for item #4.</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt="Product 5" className="card-img-top" style={{ height: '200px', width: '150px', objectFit: 'contain', margin: '0 auto' }} />
              <div className="card-body">
                <h5 className="card-title">Women's 3-in-1 Snowboard Jacket</h5>
                <p className="card-text">This is a placeholder product description for item #5.</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-5">
            <div className="card">
              <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="Product 6" className="card-img-top" style={{ height: '200px', width: '150px', objectFit: 'contain', margin: '0 auto' }} />
              <div className="card-body">
                <h5 className="card-title">Mens Casual Premium Slim Fit T-Shirts</h5>
                <p className="card-text">This is a placeholder product description for item #6.</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="p-5">
        <h2>Contact Us</h2>
        <p>Email: support@srushtistore.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3">
        &copy; 2025 Srushti Store. All rights reserved.
      </footer>
    </div>
  );
}

export default App;