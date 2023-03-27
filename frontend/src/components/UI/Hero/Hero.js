import styles from './Hero.module.scss';
import logo from '../../../assets/LiftUpLogo.png';

const Hero = () => {
	return (
		<div className={styles.image_wrapper}>
			<img src={logo} alt='Dumbbell with wings'></img>
		</div>
	);
};

export default Hero;
