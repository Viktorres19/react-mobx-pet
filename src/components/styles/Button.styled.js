import styled from 'styled-components'

export const Button = styled.button`
	background-color: ${({ bg }) => bg || '#33312B'};
	color: ${({ color }) => color || '#f4f2ff'};
	font-weight: 700;
	border-radius: 10px;
	border: 1px solid transparent;
	padding: 15px;
	font-size: 1em;
	line-height: 1;
	font-family: inherit;
	cursor: pointer;
	opacity: 1;
	transition: opacity 120ms ease-in-out;
	&:hover {
		opacity: .9;
	}
`
