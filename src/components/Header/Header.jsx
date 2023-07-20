import store from './../../store'
import styled from 'styled-components'

const StyledHeader = styled.h1`
	color: #2b1887;
	margin-top: 0;
`

const Header = () => {
	const { name } = store.business
	return (
		<StyledHeader>{name}</StyledHeader>
	);
};

export default Header;
