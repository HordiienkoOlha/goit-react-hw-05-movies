import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import styles from './Appbar.module.css';
import Container from 'components/Container';
import Loader from 'components/Loader';

export default function AppBar() {
  return (
    <>
    <Container>
      <header className={styles.header}>
        <Navigation />
      </header>
      <Suspense fallback={<Loader/>}>
      <Outlet/>
      </Suspense>
      </Container>
    </>
  );
}
