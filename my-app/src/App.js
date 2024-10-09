import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero-section">
        <nav className="navbar">
          <h1 className="logo">Asutosh sidhya</h1>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="btn primary-btn">Sign Up</button>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Your Amazing Product</h1>
          <p className="hero-subtitle">
            Discover the best way to boost your business with our cutting-edge solutions.
          </p>
          <button className="btn secondary-btn">Get Started</button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2>Our Features</h2>
        <div className="features-container">
          <div className="feature">
            <h3>Feature One</h3>
            <p>Explore how our platform helps you grow and manage your business.</p>
          </div>
          <div className="feature">
            <h3>Feature Two</h3>
            <p>Customizable tools to fit the needs of your growing enterprise.</p>
          </div>
          <div className="feature">
            <h3>Feature Three</h3>
            <p>Collaborate seamlessly and stay connected with your team.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"The best platform we've ever used. Highly recommended!"</p>
            <h4>- Jane Doe, CEO</h4>
          </div>
          <div className="testimonial">
            <p>"This product has transformed the way we do business."</p>
            <h4>- John Smith, CTO</h4>
          </div>
          <div className="testimonial">
            <p>"Efficient, powerful, and intuitive."</p>
            <h4>- Emma Brown, COO</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: support@yourbrand.com | Phone: +123 456 7890</p>
        <ul className="footer-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
