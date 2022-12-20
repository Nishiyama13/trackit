import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
//import HistoricPage from "./pages/HistoricPage/HistoricPage"
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
//import TodayPage from "./pages/TodayPages/TodayPage"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          {/*<Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoricPage />} />
  */}
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  );
}
