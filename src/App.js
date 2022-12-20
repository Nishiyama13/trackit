import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
//import TodayPage from "./pages/TodayPage/TodayPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
//import HistoricPage from "./pages/HistoricPage/HistoricPage"

import AuthContext from "./contexts/AuthContext";
import UserContext from "./contexts/UserContext";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            {/*  <Route path="/hoje" element={<TodayPage />} />
           <Route path="/historico" element={<HistoricPage />} />
             */}
          </Routes>
          <NavBar />
        </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
