import "./App.css";
import userIMG from "./assets/images/userLogin.png";

function App() {
    return (
        <>
            <div className="login-box">
                <img src={userIMG} alt="IMG_LOGIN" className="img-login" />
                <h4 className="typography">Bem-Vindo</h4>
                <form>
                    <label>Usuário</label>
                    <input type="text" placeholder="Usuário" />
                    <label>Senha</label>
                    <input type="password" placeholder="Senha" />
                    <button>Salvar</button>
                </form>
            </div>
        </>
    );
}

export default App;
