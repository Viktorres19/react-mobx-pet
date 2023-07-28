import { StyledNav } from './styles.js'
import { NavLink } from 'react-router-dom'



const Navigation = () => {
	const links = [
		{ id: 1, link: '/', text: 'Todo'},
		{ id: 2, link: '/about', text: 'About'}
	]
	return (
		<StyledNav>
			{links.map(item => (
					<NavLink
						key={item.id}
						to={`${item.link}`}
					>
						{ item.text }
					</NavLink>
			))}
		</StyledNav>
	)
}

export default Navigation
