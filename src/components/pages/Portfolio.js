import React from 'react';
import cryptoscope from '../../assets/images/cryptoscope.jpg';
import gymhomie from '../../assets/images/gymhomie.jpg';
import homebros from '../../assets/images/homebros.jpg';

export default function Portfolio() {
  const sectionStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    margin: "2rem 0",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "600px", // limit the width of the card to 400 pixels
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    marginBottom: "2rem", // add some margin at the bottom for spacing
  };

  const titleStyle = {
    margin: "1rem",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "400px",
    objectFit: "cover",
  };

  const linkStyle = {
    display: "block",
    padding: "0.5rem 1rem",
    backgroundColor: "#2D3B48",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
  };

  const descriptionStyle = {
    margin: "1rem",
    fontSize: "1.2rem",
    lineHeight: "1.5",
    color: "#777",
  };

  return (
    <div>
      <main>
        <section>
          <section>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2D3B48', letterSpacing: '0.1rem', textTransform: 'uppercase' }}>My Portfolio</h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.5', color: '#777', maxWidth: '600px', margin: '0 auto' }}>Check out some of the projects I've completed so far.</p>
            </div>
            {/* ... */}
          </section>
          <div style={sectionStyle}>
            <div style={cardStyle}>
              <img src={cryptoscope} alt="CryptoScope" style={imageStyle} />
              <div style={titleStyle}>CryptoScope</div>
              <p style={descriptionStyle}>CryptoScope is a cryptocurrency tracking web application that allows users to view real-time market data and combine their love for horoscopes to make terrible financial desicions based on the alignment of the stars. Built with basic Javascript, the app provides an intuitive user interface for both novice and advanced users.</p>
              <a href="https://llangerud.github.io/cryptoscope/" style={linkStyle}>
                Visit Site
              </a>
            </div>

            <div style={cardStyle}>
              <img src={gymhomie} alt="Gym-Homie" style={imageStyle} />
              <div style={titleStyle}>Gym-Homie</div>
              <p style={descriptionStyle}>Gym-Homie is a social fitness platform that connects gym-goers with like-minded workout partners. Built with Node.js, Express, and MySQL, the app features the ability to save workouts and workoutout plans to facilitate their gym regiment.</p>
              <a href="https://powerful-sands-21433.herokuapp.com/" style={linkStyle}>
                Visit Site
              </a>
            </div>

            <div style={cardStyle}>
              <img src={homebros} alt="HomeBros" style={imageStyle} />
              <div style={titleStyle}>HomeBros</div>
              <p style={descriptionStyle}>
                HomeBros is a modern real estate platform that enables potential home buyers to explore available properties in their desired locations. Our team utilized React, GraphQL, and various APIs to create a seamless and personalized user experience. Check out our site to start your journey towards finding your dream home.
              </p>
              <a href="https://arcane-savannah-38796.herokuapp.com/" style={linkStyle}>
                Visit Site
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}