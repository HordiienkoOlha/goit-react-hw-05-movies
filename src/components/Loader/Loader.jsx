import { Bars } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.spinner}>
      <Bars heigth="100" width="100" color="grey" ariaLabel="loading-indicator" />
    </div>
  );
};

export default Loader;