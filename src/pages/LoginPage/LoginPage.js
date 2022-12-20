import { Link, useNavigate } from "react-router-dom";
import logoBig from "../../assets/logoBig.png";
import { LoginContainer, FormContainer } from "./styled";
import { useContext, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
//https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login
import AuthContext from "../../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";

/* devolve a estrutura
{
    "id": 3,
    "name": "Joe",
    "image": "https://http.cat/411.jpg",
    "email": "joe@respondeai.com.br",
    "password": "123456",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIxMjg0NzExfQ.b8e3bYm7TnU5p6pfrCPPbzboax6gvh_gGNFR4T51FxY"
}
*/
export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  function login(e) {
    e.preventDefault();
    const url = `${BASE_URL}/auth/login`;
    const body = { email, password };
    console.log(body);

    const promise = axios.post(url, body);
    promise.then(res => {
      console.log(res);
      setUser({
        id: res.data.id,
        name: res.data.name,
        image: res.data.image,
        email: res.data.email,
      });
      setToken(res.data.token);
      navigate("/hoje");
    });
    promise.catch(err => alert(err.response.data.message));
  }

  return (
    <>
      <LoginContainer>
        <img src={logoBig} />
        <FormContainer>
          <form onSubmit={login}>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <input
              id="password"
              type="password"
              placeholder="Digite sua senha..."
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />

            <button type="submit">Entrar</button>
          </form>
          <Link to="/cadastro">Não possui uma conta? Cadastre-se</Link>
        </FormContainer>
      </LoginContainer>
    </>
  );
}
