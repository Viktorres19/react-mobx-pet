import { createBrowserRouter } from 'react-router-dom'
import TodoPage from './pages/TodoPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <TodoPage />,
		errorElement: <ErrorPage />
	},
	{
		path: '/about',
		element: <AboutPage />
	}
])
