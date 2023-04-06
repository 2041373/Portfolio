import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title"> I'm Nazar Zaheer</h1>
          <p className="home-subtitle">Computer Science Graduate</p>
          <Link to='/projects' className="home-button">Projects</Link>
        </div>
      </div>

              <section>
                  <About/>
              </section>

          



      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Projects </h1>

          <Projects/>


        </div>
      </div>


    </div>
  );
}

export default Home;
