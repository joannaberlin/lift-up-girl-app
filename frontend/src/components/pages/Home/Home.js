import Container from '../../UI/Container/Container';
import Hero from '../../Hero/Hero';
import styles from './Home.module.scss';
import TextContainer from '../../UI/TextContainer/TextContainer';
import Button from '../../UI/Button/Button';
import LinkUI from '../../UI/LinkUI/LinkUI';

const Homepage = () => {
	return (
		<Container>
			<Hero />
			<TextContainer>
				<p>Lifting weights make you physically strong but mentally too.</p>
				<p>
					With this app, we - girls who lift, want to invite you to start the
					journey of strength training. The app helps you with staying motivated
					by tracking your progress.
				</p>
				<p>
					Check our <LinkUI to='/blog'>blog</LinkUI> with health related topics
					if you aren't convinced yet, that Girl, you can lift too. Grab your
					favourite coffee and read about health benefits of strength training.
				</p>
				<p>Aaaah and Girl, don't worry, you won't get bulky!</p>
				<p>You ready, Girl?</p>
			</TextContainer>
			<div className={styles.buttons_wrapper}>
				<Button>Log In</Button>
				<Button>Sign Up</Button>
			</div>
		</Container>
	);
};

export default Homepage;
