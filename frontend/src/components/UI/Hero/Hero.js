import { Form, useRouteLoaderData } from 'react-router-dom';
import styles from './Hero.module.scss';
import logo from '../../../assets/LiftUpLogo.png';

const Hero = () => {
	const token = useRouteLoaderData('root');

	return (
		<>
			<div className={styles.image_wrapper}>
				<img src={logo} alt='Dumbbell with wings'></img>
			</div>
			{token && (
				<Form action='/logout' method='post'>
					<button>Log out</button>
				</Form>
			)}
		</>
	);
};

export default Hero;
