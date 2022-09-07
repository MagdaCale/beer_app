import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledDiv = styled.div`
    background: #ffCA41;
    padding: 5px;
    height: 70px;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
`

const NavBar =()=>{
    return(
        <nav>
            <StyledDiv className="NavBar">
                <Link to='/'><img src="../img/Logo.png" alt="beer icon" /></Link>
            </StyledDiv>
        </nav>

    )
}

export default NavBar