import styled from 'styled-components'

const StyledCopy = styled.p`
    background-color: #f2f2f2;
    font-size: 33px;
    font-weight: bold;
    padding: 20px;
    text-align: center;
    margin: 0;
    color: darkblue;
    font-size: 14px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`

const InfoFoot = () => {
    return <StyledCopy>&copy; 2023 weather api RTK query demo</StyledCopy>
}

export default InfoFoot
