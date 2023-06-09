import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import Hero from '../../components/UI/Hero/Hero';
import { getTokenDuration } from '../../util/auth';

const RootLayout = () => {
	const token = useLoaderData();
	const submit = useSubmit();

	useEffect(() => {
		if (!token) {
			return;
		}

		if (token === 'EXPIRED') {
			submit(null, { action: './logout', method: 'post' });
			return;
		}

		const tokenDuration = getTokenDuration();

		setTimeout(() => {
			submit(null, { action: './logout', method: 'post' });
		}, tokenDuration);
	}, [token, submit]);

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
