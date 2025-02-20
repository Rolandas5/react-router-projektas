import './contactspage.css';
import './socialicons.css';

export function ContactInfo() {
  return (
    <div className="contact-info">
      <h2>Kontaktai:</h2>
      <br />
      <p>Marijampolė, LT</p>
      <br />
      <p>📞 (0 700) 96053</p>
      <br />
      <p>📧 info@vairuva.lt</p>
      <br />
      <div className="social-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="social-icon"
        >
          <img
            src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
            alt="Facebook"
          />
          <span>Facebook</span>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          className="social-icon"
        >
          <img
            src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
            alt="Instagram"
          />
          <span>Instagram</span>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="social-icon"
        >
          <img
            src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
            alt="LinkedIn"
          />
          <span>LinkedIn</span>
        </a>
        <a href="https://www.x.com" target="_blank" className="social-icon">
          <img
            src="https://img.icons8.com/?size=100&id=yoQabS8l0qpr&format=png&color=000000"
            alt="X"
          />
          <span>X</span>
        </a>
      </div>
    </div>
  );
}
