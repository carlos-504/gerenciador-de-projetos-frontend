import React from "react";
import Navbar from "../../components/Navbar";
import { ReactComponent as HomeSVG } from "../../assets/images/home.svg";
import "./style.css";

function Home() {
    return (
        <>
            <Navbar />
            <div className="home">
                <HomeSVG className="home-img" />
                <h1>Bem-Vindo, [userName]</h1>

                <div className="buttons">
                    <button className="insert-btn">Cadastrar Projeto</button>
                    <button className="list-btn">Listar Projetos</button>
                </div>
            </div>
        </>
    );
}

export default Home;
