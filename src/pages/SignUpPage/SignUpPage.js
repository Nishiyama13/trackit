//import { Link } from "react-router-dom"
import { useState } from "react";
import { ContainerSignUp, Button } from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function createAccount(e) {
    e.preventDefault();
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const body = { email, name, image, password };

    const promise = axios.post(URL, body);
    promise.then(res => {
      alert("Cadastro Realizado");
      navigate("/");
    });
    promise.catch(err => console.log(err.response.data));
  }
  return (
    <ContainerSignUp>
      <h1>colocar logo</h1>

      <form onSubmit={createAccount}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="nome"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="foto"
          value={image}
          onChange={e => setImage(e.target.value)}
          required
        />

        <Button type="submit">Cadastrar</Button>
      </form>
    </ContainerSignUp>
  );
}
