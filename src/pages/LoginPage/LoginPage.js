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
  const [form, setForm] = useState({});
  const url = `${BASE_URL}/auth/login`;
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const user = {
    email: "",
    password: "",
  }; //formato para envio

  function login(e) {
    e.preventDefault();
    user.email = emailUser;
    user.password = passwordUser;
    console.log(user);

    setForm([...form, user]);
    console.log(form);
    if (user.email != "" && user.password != "") {
      const promise = axios.post(url);
      promise.then(() => navigate("/"));
      promise.catch(err => console.log(err.response.data));
    }
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
              value={emailUser}
              onChange={e => setEmailUser(e.target.value)}
              required
            />

            <input
              id="password"
              type="password"
              placeholder="Digite sua senha..."
              value={passwordUser}
              onChange={e => setPasswordUser(e.target.value)}
              required
            />

            <button type="submit">Entrar</button>
          </form>
        </FormContainer>
      </LoginContainer>
    </>
  );
}
