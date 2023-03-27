import {
	Form,
	Link,
	useSearchParams,
	useActionData,
	useNavigation,
} from 'react-router-dom';

import styles from './AuthForm.module.scss';

const AuthForm = () => {
	const data = useActionData();
	const navigation = useNavigation();

	const [searchParams] = useSearchParams();
	const isLogin = searchParams.get('mode') === 'login';
	const isSubmitting = navigation.state === 'submitting';

	return (
		<>
			<Form method='post' className={styles.form}>
				<h1>{isLogin ? 'Log in' : 'Sign up'}</h1>
				{data && data.errors && (
					<ul>
						{Object.values(data.errors).map((err) => (
							<li key={err}></li>
						))}
					</ul>
				)}
				{data && data.message && <p>{data.message}</p>}
				<p>
					<label htmlFor='email'>Email</label>
					<input id='email' type='email' name='email' required />
				</p>
				<p>
					<label htmlFor='image'>Password</label>
					<input id='password' type='password' name='password' required />
				</p>
				<div className={styles.actions}>
					<Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
						{isLogin ? 'Sign up' : 'Log in'}
					</Link>
					<button disable={isSubmitting.toString()}>
						{isSubmitting ? 'Submitting...' : 'Save'}
					</button>
				</div>
			</Form>
		</>
	);
};

export default AuthForm;
