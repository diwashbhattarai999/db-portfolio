import { useState } from "react";
import "./Contact.css";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    setFormData(formData)
  }

  return (
    <section id="contact" className="contact">
      <h5>Let's Chat</h5>
      <h2>Contact Me</h2>
      <div className="contact__info">
        <div className="contact__links">
          <a
            href="https://goo.gl/maps/oojYmR3KmF1WR6Hw7"
            className="contact__link"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <ImLocation2 />
              <h3>Address</h3>
            </div>
            <h4>Rudramati Marg, Handigaun-05, kathmandu</h4>
          </a>
          <a href="mailto:diwashb999@gmail.com" className="contact__link">
            <div>
              <MdEmail />
              <h3>Email</h3>
            </div>
            <h4>diwashb999@gmail.com</h4>
          </a>
          <a href="tel:9863447740" className="contact__link">
            <div>
              <BsFillTelephoneFill />
              <h3>Phone</h3>
            </div>
            <h4>+977 9863447740</h4>
          </a>
        </div>
        <form className="contact__message" onSubmit={handleSubmit}>
          <div className="contact__input">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInput}
              required
              autoComplete="off"
            />
            <span>Name</span>
          </div>
          <div className="contact__input">
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleInput}
              required
              autoComplete="off"
            />
            <span>Email</span>
          </div>
          <div className="contact__input textarea">
            <textarea
              rows="4"
              name="message"
              value={message}
              onChange={handleInput}
              required
              autoComplete="off"
            />
            <span>Message Here</span>
          </div>
          <button
            type="submit"
            onClick={handleClick}
            className="btn contact__btn"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
