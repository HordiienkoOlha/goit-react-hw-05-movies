import * as React from "react";
import { NavLink} from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
return (
      <nav>
    <ul className={styles.list}>
      <li>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) =>
              isActive ? styles['active-link'] : styles.link
            }
          >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
              isActive ? styles['active-link'] : styles.link
            }
          >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
  )

};

export default Navigation;
