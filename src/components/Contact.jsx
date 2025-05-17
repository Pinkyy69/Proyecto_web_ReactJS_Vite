import React from "react";

const Contact = () => (
  <section id="contact" className="view">
    <h2>Contact Us</h2>
    <form id="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required autoComplete="name" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required autoComplete="email" />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;
