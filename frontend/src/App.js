import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import RootLayout from './pages/RootLayout/RootLayout';
import Homepage from './pages/Home/Home';
import Authentication from './pages/Authentication/Authentication';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Homepage /> },
			{
				path: 'blog',
				element: <Blog />,
			},
			{
				path: 'auth',
				element: <Authentication />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
