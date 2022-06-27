import * as React from "react";
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
let activeStyle = {
    textDecoration: "underline",
  };

return (
      <nav>
    <ul className={styles.list}>
      <li>
        <NavLink
          exact="true"
          to="/"
          className={styles.link}
          style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
                Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={styles.link}
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
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
