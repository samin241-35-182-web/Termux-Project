import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <img src={logo} className="logo" alt="logo" />
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My React Home Page</h1>
        <p>This is a simple React homepage built with functional components.</p>
        <button className="btn">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-card">🚀 Fast</div>
          <div className="feature-card">🎨 Clean Design</div>
          <div className="feature-card">⚛️ Powered by React</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 My React App. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
