import React from "react";
import resume1 from "../../assets/images/resume1.png";
import resume2 from "../../assets/images/resume2.pdf";

const style = {
  img: {
    width: "18rem"
  },
  header: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#282c34",
    marginBottom: "3rem",
    textShadow: "1px 1px #000000"
  }
};

export default function Resume() {
  return (
    <div className="text-center">
      <h1 style={style.header}>My Awesome Resume</h1>
      <div className="row">
        <div className="card mx-auto" style={style.img}>
          <img src={resume1} className="card-img-top" alt="project pic"></img>
          <div className="card-body">
            <a href={resume2} target="_blank" className="btn btn-primary">Download Resume!</a>
          </div>
        </div>
      </div>
    </div>
  );
}