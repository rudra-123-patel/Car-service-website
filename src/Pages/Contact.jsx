import React from "react";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="header-text">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-text">
          <form className="contact-form">
            <div>
              <label>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ex : Rjp@123.com"
                required
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="tel"
                id="number"
                name="number"
                placeholder="Ex: 1234567890"
                required
              />
            </div>
            <div>
              <label>Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
