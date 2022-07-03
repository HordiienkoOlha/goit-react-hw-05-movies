import { Link } from 'react-router-dom';

export const NotFoundView = () => {
  return (
    <h1>
      Page not found :(, go to
      <Link to="/">Home</Link>
    </h1>
  );
};