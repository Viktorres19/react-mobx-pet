import styled from 'styled-components'

export const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
  a {
	  padding: 10px;
	  border-radius: 10px;
	  background-color: white;
	  color: #2b1887;
	  border: 2px solid transparent;
	  opacity: 1;
	  transition: opacity .3s ease;
	  &:hover {
		  opacity: .7;
	  }
	  &.active {
		  pointer-events: none;
		  border-color: #2b1887;
	  }
  }
`
