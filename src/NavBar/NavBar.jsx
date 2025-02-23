import { Link } from 'react-router-dom';
import './navbar.css';

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};
