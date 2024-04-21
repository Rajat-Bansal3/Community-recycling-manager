import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contact'>
    
        
      
      <div className="contact-form">
        <h2>Send us a Message</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      </div>
  );
};

export default ContactUs;
