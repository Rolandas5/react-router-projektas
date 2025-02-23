import { Link } from 'react-router-dom';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">Copyright © 2025 Pixelgrade</div>
      <nav className="footer-content">
        <ul className="footer">
          <li>
            <Link className="footer-a" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="footer-a" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="footer-a" to="/contacts">
              Contacts
            </Link>
          </li>
          <li>
            <Link className="footer-a" to="/reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
