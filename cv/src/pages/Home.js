import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Hello, I'm Nazar Zaheer</h1>
        <p className="home-subtitle">Computer Science Graduate</p>
        <Link to='/projects' className="home-button">Projects</Link>
      </div>
    </div>
  );
}

export default Home;
