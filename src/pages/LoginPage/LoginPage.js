//import { Link } from "react-router-dom"
import logoBig from "../../assets/logoBig.png";
import { LoginContainer, FormContainer } from "./styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
//https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login

import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();
    const url = `${BASE_URL}/auth/login`;
    const body = { email, password };
    console.log(body);

    const promise = axios.post(url, body);
    promise.then(res => {
      console.log(res);
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
        </FormContainer>
      </LoginContainer>
    </>
  );
}
