import React from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_dpcxyur",
      "template_lpovpyz",
      form.current,
      "grLd2tB0jilYUVnFN"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-item" />
            <h4>Email</h4>
            <h5>Email Me</h5>
            <a href="mailto:faria.kamal.soha@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option" target="_blank">
            <RiMessengerLine className="contact__option-item" />
            <h4>Messenger</h4>
            <h5>Message Me</h5>
            <a href="https://m.me/fariakamalsoha/" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-item" />
            <h4>WhatsApp</h4>
            <h5>Try WhatsApp</h5>
            <a
              href="https://web.whatsapp.com/send?phone=+8801745171422&text=message&app_absent=0"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>

          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
