import {NavLink, useRouteError} from 'react-router-dom'

const ErrorPage = () => {
	const error = useRouteError()
	console.log(error)

	return (
		<div id="error-page">
			<h2>Error Page</h2>
			<NavLink
				to={`/`}
			>
				Please visit Todo page
			</NavLink>
		</div>
	)
}

export default ErrorPage
