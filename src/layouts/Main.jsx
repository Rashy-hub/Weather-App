import styled from 'styled-components'

import SearchGeo from '../components/SearchGeo'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: auto;
`

const Main = () => {
    return (
        <StyledContainer>
            <SearchGeo />
        </StyledContainer>
    )
}

export default Main
