import styled from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing'

const StyledApp = styled.div`
  background-color: #d5ccff;
  padding: 15px;
  border-radius: 10px;
  min-height: 100px;
  min-width: 470px;
  box-sizing: border-box;
`

const App = () => {
  return (
    <StyledApp>
      <RouterProvider router={router} />
    </StyledApp>
  )
}

export default App
