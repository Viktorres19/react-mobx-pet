import styled from 'styled-components'

export const UnorderedList = styled.ul`
	padding: 0;
	list-style-type: none;
`

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f4f2ff;
	border-radius: 10px;
	padding: 20px;
	& span {
		flex-grow: 2;
		box-sizing: border-box;
		padding: 0 10px;
		color: #2b1887;
		font-weight: 700;
	}
	& input[type="checkbox"] {
		appearance: none;
		background-color: #735efa;
		margin: 0;
		font: inherit;
		color: #2b1887;
		width: 25px;
		height: 25px;
		border: 2px solid #2b1887;
		border-radius: 50%;
		display: grid;
		place-content: center;
		cursor: pointer;
		transition: all 120ms ease-in-out;
		&:hover {
			box-shadow: 0 0 12px 0 #735efa;
		}
		&::before {
			content: '';
			width: 15px;
			height: 15px;
			transform: scale(0);
			transition: 120ms transform ease-in-out;
			border-radius: 50%;
			background-color: #2b1887;
		}
		&:checked::before {
			transform: scale(1);
		}
	}
	& button {
		background-color: #e42c5f;
		color: #f4f2ff;
		font-weight: 700;
		border-radius: 8px;
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
	}
`
