import "./Header.css";
import Wave from "../../assets/wave.gif";
import CV from "../../assets/DiwashCv.pdf";

const Header = () => {
  return (
    <section id="home" className="home">
      <div className="header__container">
        <h5>
          Hey there <img src={Wave} alt="wave" />, my name is
        </h5>
        <h1>Diwash Bhattarai</h1>
        <h3>Frontend Developer</h3>
        <div className="header__hero-para">
          <p>
            A passionate student learning to code from Nepal🇳🇵. I'm a CSIT
            student and enthusiastic programmer building my version of the
            programming world one step at a time. I am trying my best to learn
            and explore every opportunity of my life.
          </p>
        </div>
        <a href={CV} download className="btn">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Header;
