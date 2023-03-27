import { Outlet } from 'react-router-dom';
import Hero from '../../components/UI/Hero/Hero';

const RootLayout = () => {
	return (
		<>
			<Hero />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
