import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          exact="true"
          to="/"
          className={styles.link}
          // activeclassname={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li>
        {/* <NavLink
      to="/movies"
      className={styles.link}
      activeclassname={styles.activeLink}
    >
      Movies
    </NavLink> */}
      </li>
    </ul>
  </nav>
);

export default Navigation;
