import "./Contact.css";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { send } from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import {
  contactAnimation,
  contactLinkAnimation,
} from "../../animation/animation";
import { useScroll } from "../../animation/useScroll";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send("service_axhdvt8", "template_zl7gas4", data, "ueqBmn09k8uUAeY2K")
      .then((res) => {
        console.log("SUCESS!!", res.status, res.text);
        formSucess();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const formSucess = () => {
    toast("Thanks for submitting your Message!");
    document.getElementById("queryForm").reset();
  };

  const [element, controls] = useScroll();

  return (
    <section id="contact" className="contact ">
      <h5>Let's Chat</h5>
      <h2>Contact Me</h2>
      <div className="contact__info" ref={element}>
        {/* ==================== LINKS ==================== */}
        <motion.div
          className="contact__links"
          variants={contactLinkAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween", duration: 0.8 }}
        >
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
          <p>I would be happy to answer any questions.</p>
        </motion.div>
        {/* ==================== END LINKS ==================== */}

        {/* ==================== FORM ==================== */}
        <motion.div
          className="contact__message"
          variants={contactAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween", duration: 0.8 }}
        >
          <ToastContainer />
          <form
            id="queryForm"
            className="contact__message"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="contact__row">
              <div className="contact__input">
                <input
                  type="text"
                  name="from_name"
                  autoComplete="off"
                  required
                  {...register("from_name", {
                    required: "Name is required",
                  })}
                />
                <span>Name</span>
                {errors.from_name?.message && (
                  <p className="errors">{errors.from_name?.message}</p>
                )}
              </div>
              <div className="contact__input">
                <input
                  type="text"
                  name="reply_to"
                  autoComplete="off"
                  required
                  {...register("reply_to", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                <span>Email</span>
                {errors.reply_to?.message && (
                  <p className="errors">{errors.reply_to?.message}</p>
                )}
              </div>
            </div>
            <div className="contact__row">
              <div className="contact__input">
                <input
                  type="text"
                  name="phone_number"
                  autoComplete="off"
                  required
                  {...register("phone_number", {
                    required: "Phone number is required",
                    minLength: {
                      value: 8,
                      message: "Phone number is not valid",
                    },
                  })}
                />
                <span>Phone</span>
                {errors.phone_number?.message && (
                  <p className="errors">{errors.phone_number?.message}</p>
                )}
              </div>
              <div className="contact__input">
                <input
                  type="text"
                  name="subject"
                  autoComplete="off"
                  required
                  {...register("subject", {
                    required: "Subject is required",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 characters required",
                    },
                  })}
                />
                <span>Subject</span>
                {errors.subject?.message && (
                  <p className="errors">{errors.subject?.message}</p>
                )}
              </div>
            </div>
            <div className="contact__input textarea">
              <textarea
                className="textarea"
                name="message"
                autoComplete="off"
                required
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 20,
                    message: "Minimum 20 characters required",
                  },
                  maxLength: {
                    value: 500,
                    message: "Minimum 500 characters allowed",
                  },
                })}
              />
              <span>Message</span>
              {errors.message?.message && (
                <p className="errors">{errors.message?.message}</p>
              )}
            </div>

            <button type="submit" className="btn contact__btn">
              Submit
            </button>
          </form>
        </motion.div>
        {/* ==================== END FORM ==================== */}
      </div>
    </section>
  );
};

export default Contact;
