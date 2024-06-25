import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/products',
		element: <p>Products</p>,
	},
	{
		path: '/products/:id',
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<Toaster />
		<RouterProvider router={router} />
	</>
);
