import styled from 'styled-components'

export const StyledAddTodo = styled.form`
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	align-items: stretch;
	& input {
		flex-grow: 2;
		margin-right: 10px;
		border: none;
		padding: 10px 20px;
		border-radius: 10px;
		font-size: 24px;
		&::placeholder {
			color: rgba(43, 24, 135, .8);
		}
		&:focus-visible {
			outline: none;
		}
	}
	& button {
		background-color: #2b1887;
		color: #f4f2ff;
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
	}
`
