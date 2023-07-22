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
`
