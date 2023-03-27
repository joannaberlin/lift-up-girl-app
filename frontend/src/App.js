import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Blog from './components/pages/Blog/Blog';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/blog' element={<Blog />} />
		</Routes>
	);
}

export default App;
