import { Form, useRouteLoaderData, Link } from 'react-router-dom';
import styles from './Hero.module.scss';
import logo from '../../../assets/LiftUpLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
	const token = useRouteLoaderData('root');

	return (
		<>
			<div className={styles.image_wrapper}>
				<img src={logo} alt='Dumbbell with wings'></img>
			</div>
			{token && (
				<Form action='/logout' method='post'>
					<button className={styles.button}>
						<FontAwesomeIcon icon={faRightFromBracket} />
					</button>
				</Form>
			)}
			{!token && (
				<Link to='auth'>
					<button className={styles.button}>
						<FontAwesomeIcon icon={faRightToBracket} />
					</button>
				</Link>
			)}
		</>
	);
};

export default Hero;
