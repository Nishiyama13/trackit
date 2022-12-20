//import { Link } from "react-router-dom"
import { useContext, useEffect } from "react";
import { ContainerToday } from "./styled";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
//https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today
import AuthContext from "../contexts/AuthContext";
import UserContext from "../../contexts/UserContext";

export default function TodayPage() {
  const { token } = useContext(AuthContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const url = `${BASE_URL}/habits/today`;
    const config = { headers: { Authorization: `Bearer ${token}` } };

    const promise = axios.get(url, config); //,headers
    promise.then(res => console.log(res.data));
    promise.cath(err => console.log(err.response.data));
  }, []);

  return (
    <ContainerToday>
      <h1>{user.name}</h1>
    </ContainerToday>
  );
}
