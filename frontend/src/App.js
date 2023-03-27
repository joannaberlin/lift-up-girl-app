import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import RootLayout from './pages/RootLayout/RootLayout';
import Homepage from './pages/Home/Home';
import Authentication, {
	action as authAction,
} from './pages/Authentication/Authentication';
import ErrorPage from './pages/Error/ErrorPage';
import { tokenLoader, checkAuthLoader } from './util/auth';
import { action as logoutAction } from './pages/Logout/Logout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		id: 'root',
		loader: tokenLoader,
		children: [
			{ index: true, element: <Homepage /> },
			{
				path: 'blog',
				element: <Blog />,
			},
			{
				path: 'auth',
				element: <Authentication />,
				action: authAction,
			},
			{
				path: 'logout',
				action: logoutAction,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
