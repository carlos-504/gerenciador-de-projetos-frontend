import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ReactComponent as HomeSVG } from "../../assets/images/home.svg";
import "./style.css";

function Home() {
    return (
        <>
            <div className="page-container">
                <Navbar />
                <div className="home">
                    <HomeSVG className="home-img" />
                    <h1>Bem-Vindo, [userName]</h1>

                    <div className="buttons">
                        <button className="insert-btn">
                            Cadastrar Projeto
                        </button>
                        <button className="list-btn">Listar Projetos</button>
                    </div>
                </div>
                <div className="custom-footer">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;
