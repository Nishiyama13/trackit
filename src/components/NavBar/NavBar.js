import { NavBarContainer, SubButtonsContainer } from "./styled";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const navigate = useNavigate();
  function habitosWay() {
    navigate("/habitos");
  }
  function historicoWay() {
    navigate("/historico");
  }

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
