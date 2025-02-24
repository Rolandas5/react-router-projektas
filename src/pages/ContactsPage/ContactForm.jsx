import { useState } from 'react';
import axios from 'axios';
import './contactspage.css';
import { api } from '../../constants/globalConstants';

const ContactForm = () => {
  // saugo vartotojo įvestą vardą.
  const [name, setName] = useState('');
  // saugo vartotojo įvestą el. paštą.
  const [email, setEmail] = useState('');
  // saugo vartotojo įvestą žinutę.
  const [message, setMessage] = useState('');

  // handleSubmit funkcija pateikia formą.
  const handleSubmit = async (event) => {
    event.preventDefault();
    // naujas objektas, kuris apima įvestus duomenis.
    const newReview = { name, email, message };
    try {
      const response = await axios.post(`${api}`, newReview);
      console.log('Atsakymas iš serverio:', response.data);
    } catch (error) {
      console.error('error');
    } finally {
      useState('');
      useState('');
      useState('');
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
