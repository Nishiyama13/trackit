import { HeaderContainer } from "./styled"
import logoSmall from "../../assets/logoSmall.png"
import imgteste from "../../assets/imgteste.png"
export default function Header() {
    return (
        <HeaderContainer>
            <img src={logoSmall} />
            <img src={imgteste} />

        </HeaderContainer>
    )
}