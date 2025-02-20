import { Link } from 'react-router-dom';
import './footer.css';

export const Footer = () => {
  return (
    <nav className="footer-content">
      <ul className="footer">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
