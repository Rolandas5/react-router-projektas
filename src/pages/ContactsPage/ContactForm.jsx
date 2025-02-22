import './ContactsPage.css';

export function ContactForm() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="3" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
