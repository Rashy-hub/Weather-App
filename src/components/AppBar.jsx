import styled from 'styled-components'

const StyledAppBar = styled.h1`
    color: #5843e4;
    font-size: 40px;
    font-weight: bold;
    font-family: Impact, 'Arial Narrow Bold', sans-serif;
    text-align: center;
`
const AppBar = () => {
    return <StyledAppBar>Weather Api</StyledAppBar>
}

export default AppBar
