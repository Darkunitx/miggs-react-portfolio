import React from 'react';
import cryptoscope from '../../assets/images/cryptoscope.jpg';
import gymhomie from '../../assets/images/gymhomie.jpg';
import homebros from '../../assets/images/homebros.jpg';
import comingsoon from '../../assets/images/comingsoon.jpg';

export default function Portfolio() {
  return (
    <div>
    <main>
      <section>
        <article id="work" className="sectionwork">
          <h2>Work</h2>
          <p>These are the projects that I have completed thus far</p>
          <br />
          <br />
          <br />
          <p>CryptoScope</p>
          <a href="https://llangerud.github.io/cryptoscope/">
            <img src={cryptoscope} alt="CryptoScope" style={{ width: "500px" }} />
          </a>
        </article>
      </section>

      <section>
        <article id="work" className="sectionwork" style={{ textAlign: "center" }}>
          <br />
          <br />
          <br />
          <p>Gym-Homie</p>
          <a href="https://powerful-sands-21433.herokuapp.com/">
            <img src={gymhomie} alt="Gym-Bro" />
          </a>
        </article>
      </section>

      <section>
        <article id="work" className="sectionwork">
          <br />
          <br />
          <br />
          <p>HomeBros</p>
          <a href="https://arcane-savannah-38796.herokuapp.com/">
            <img src={homebros} alt="HomeBros" style={{ width: "500px" }} />
          </a>
        </article>

        <article id="work" className="sectionmain">
          <p>Challenge #4</p>
          <img src={comingsoon} alt="Coming Soon" style={{ width: "400px" }}/>
        </article>

        <article id="work" className="sectionmain">
          <p>Challenge #5</p>
          <img src={comingsoon} alt="Coming Soon" style={{ width: "400px" }} />
        </article>
        
        <article id="work" className="sectionmain">
          <p>Challenge #6</p>
          <img src={comingsoon} alt="Coming Soon" style={{ width: "400px" }} />
        </article>

      </section>
    </main>
</div>
  );
}