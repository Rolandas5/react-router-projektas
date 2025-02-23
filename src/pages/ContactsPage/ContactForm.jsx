import { useState } from 'react';
import axios from 'axios';
import './contactspage.css';
import { api } from '../../constants/globalConstants';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newReview = { name, message };

    try {
      // Siunčiame POST užklausą
      await axios.post(`${api}/reviews`, newReview);
      setName('');
      setEmail('');
      setMessage('');
      alert('Review submitted!');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
