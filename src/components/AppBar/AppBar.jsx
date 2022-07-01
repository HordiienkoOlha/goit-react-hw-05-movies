import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';
import styles from './Appbar.module.css';

export default function AppBar() {
  return (
    <>
      <header className={styles.header}>
        <Navigation />
      </header>
      <Outlet/>
    </>
  );
}
