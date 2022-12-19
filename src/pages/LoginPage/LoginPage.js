//import { Link } from "react-router-dom"
import logoBig from "../../assets/logoBig.png"
import { LoginContainer, FormContainer } from "./styled"
import { useState } from "react"
import { useForm } from "react-hook-form";

//https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login

export default function LoginPage() {
    //const [form, setForm] = useState({})
    const [emailUser, setEmailUser] = useState("")
    const [passwordUser, setPasswordUser] = useState("")
    const user = {
        email: "",
        password: ""
    } //formato para envio

    function login(e) {
        e.preventDefault()
        const { value, name } = e.target
        user.email = emailUser;
        user.password = passwordUser;
        console.log(user)

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
    )
}