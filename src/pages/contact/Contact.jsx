import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">Get in <span>Touch</span></h2>
      <div className="contact__container grid">
        <div className="contact__data">
          <h3 className="contact__title"></h3>
          <p className="contact__Description">
            Feel free to get in touch with me. I am always open to discuss 
            new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className="info__title">Mail Me</span>
                <span className="info__desc">test2345@gmail.com</span>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className="info__title">Contact me</span>
                <span className="info__desc">+91 82XXXXXXXX</span>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a href="#" className="contact__social-link">
              <FaFacebookF/>
            </a>
            <a href="#" className="contact__social-link">
              <FaTwitter/>
            </a>
            <a href="#" className="contact__social-link">
              <FaYoutube/>
            </a>
          </div>
        </div>
        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder="Your Name" className="form__control" />
            </div>
            <div className="form__input-div">
              <input type="email" placeholder="Your Email" className="form__control" />
            </div>
            <div className="form__input-div">
              <input type="text" placeholder="Your subject" className="form__control" />
            </div>
          </div>
          <div className="form__input-div">
            <textarea placeholder="Enter your message" className="form__control textarea"></textarea>
          </div>
          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;