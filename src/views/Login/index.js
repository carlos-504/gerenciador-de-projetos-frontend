import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/FormField/Input";
import api from "../../services/api";
import { login, setIdUser, setNameUser } from "../../services/auth";
import userIMG from "../../assets/images/userLogin.png";
import { useHistory } from "react-router-dom";
import "./style.css";

function App() {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = async (data) => {
        try {
            const response = await api.post("/authenticate", data);
            login(response.data.token);
            setIdUser(response.data.user._id);
            setNameUser(response.data.name);

            history.push("/home");
        } catch (err) {
            return err.message;
        }
    };

    return (
        <>
            <div className="login-box">
                <img src={userIMG} alt="IMG_LOGIN" className="img-login" />
                <h4 className="typography">Bem-Vindo</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="text"
                        label="Email"
                        name="email"
                        placeholder="Email"
                        register={register}
                    />
                    <Input
                        type="password"
                        label="Senha"
                        name="password"
                        placeholder="Senha"
                        register={register}
                    />
                    <button>Entrar</button>
                </form>
            </div>
        </>
    );
}

export default App;
