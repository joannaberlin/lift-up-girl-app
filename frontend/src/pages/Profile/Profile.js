import { redirect, useRouteLoaderData } from 'react-router-dom';

const Profile = () => {
	const token = useRouteLoaderData('root');

	if (!token) {
		return redirect('/');
	}

	// here I take user
	return <h3>Profile page</h3>;
};

export default Profile;
