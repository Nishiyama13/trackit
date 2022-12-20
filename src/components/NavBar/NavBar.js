import { NavBarContainer, SubButtonsContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function NavBar() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  function habitosWay() {
    navigate("/habitos");
  }
  function historicoWay() {
    navigate("/historico");
  }

  if (user !== {}) {
    <NavBarContainer></NavBarContainer>;
  } else {
    return (
      <NavBarContainer>
        NavBar
        <SubButtonsContainer>
          <button onClick={habitosWay}>Hábitos</button>
          <button onClick={historicoWay}>Histórico</button>
        </SubButtonsContainer>
      </NavBarContainer>
    );
  }
}
