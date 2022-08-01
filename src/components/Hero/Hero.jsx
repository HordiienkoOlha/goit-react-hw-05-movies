import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css'

const Hero = () => {
    const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Unlimited movies</h2>
      <p className={styles.text}>Watch anywhere. Cancel anytime. Ready to watch?</p>
              <button type="button" className={styles.button} onClick={()=> navigate('movies')}>Search here anytime</button>
      
    </section>
  );
};

export default Hero;