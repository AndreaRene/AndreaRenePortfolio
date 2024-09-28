import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Navbar/Header';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile/Profile';
import Portfolio from './pages/Portfolio/Portfolio';
import ContactPage from './pages/Contact/ContactPage.jsx';

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
