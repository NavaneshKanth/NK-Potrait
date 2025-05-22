import React from "react";
import "../css/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">Let's get in touch for collaboration or job opportunities.</p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Reach Me</h3>
          <p><FaPhoneAlt /> +971 58 115 7270 <span>(Dubai - WhatsApp)</span></p>
          <p><FaPhoneAlt /> +91 9489635481 <span>(India - WhatsApp)</span></p>
          <p><FaEnvelope /> navaneshkanth@gmail.com</p>
          <p><FaMapMarkerAlt /> Currently in Dubai, Native: Tamil Nadu, India</p>
          <a
            href={`${process.env.PUBLIC_URL}/NavaneshKanthNAResume.pdf`}
            download
            className="btn btn-primary"
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontWeight: "bold",
              backgroundColor: "#185a9d",
              border: "none",
              borderRadius: "5px",
              display: "inline-block",
              color: "white",
              textDecoration: "none"
            }}
          >
            Download Resume
          </a>

          <div className="social-icons">
            <a href="https://www.facebook.com/share/1a61gv7vqW/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/navanesh_kanth?igsh=MXIwbTJuY2VlYXcwZg==" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/Navanesh_kanth?s=08" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a
              href="https://wa.me/+971581157270"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp size={30} color="#25D366" />
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
