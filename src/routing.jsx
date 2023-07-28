import { createBrowserRouter } from 'react-router-dom'
import TodoPage from './pages/TodoPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <TodoPage />
	},
	{
		path: '/about',
		element: <AboutPage />
	}
])
