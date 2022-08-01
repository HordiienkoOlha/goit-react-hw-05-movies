import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from 'components/Loader';
import styles from './Appbar.module.css';
import Container from 'components/Container';

export default function AppBar() {
  return (
    <>
      <header className={styles.header}>
        <Container>
        <Navigation />
        </Container>
      </header>
      <Suspense fallback={<Loader/>}>
      <Outlet/>
      </Suspense>
    </>
  );
}
