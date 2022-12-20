import { useContext } from "react";
import { HeaderContainer } from "./styled";
import logoSmall from "../../assets/logoSmall.png";
//import imgteste from "../../assets/imgteste.png";
import UserContext from "../../contexts/UserContext";
export default function Header() {
  const { user } = useContext(UserContext);
  console.log(user.data);
  if (user !== {}) {
    return (
      <HeaderContainer>
        <img src={logoSmall} />
        <img src={user.image} />
      </HeaderContainer>
    );
  } else {
    return (
      <HeaderContainer>
        <img src={logoSmall} />
      </HeaderContainer>
    );
  }
}
