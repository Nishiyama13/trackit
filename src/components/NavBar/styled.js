import styled from "styled-components"
import { secondColor } from "../../constants/colors"


export const NavBarContainer = styled.div`
width: 100%;
height: 100px;
margin: auto;
bottom: 0px;
position: fixed;
`

export const SubButtonsContainer = styled.div`
width: 100%;
height: 80%;
display: flex;
background-color: #FFF;
justify-content: space-around;

.button{
    color: ${secondColor};
}

` 