import styled from 'styled-components'

export const StyledTodoItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f4f2ff;
	border-radius: 10px;
	padding: 20px;
	&:not(:last-child) {
		margin-bottom: 10px;
	}
	& > span {
		flex-grow: 2;
		box-sizing: border-box;
		padding: 0 10px;
		color: #2b1887;
		font-weight: 700;
	}
`
