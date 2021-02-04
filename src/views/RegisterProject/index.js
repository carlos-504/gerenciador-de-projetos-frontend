import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Input from "../../components/FormField/Input";
import "./style.css";

function RegisterProject() {
    return (
        <div className="page-container">
            <Navbar />
            <form className="insert-form">
                <h1 className="insert-typography">Cadastrar Projeto</h1>
                <Input
                    type="text"
                    label="Título"
                    name="title"
                    placeholder=""
                    className="insert-input"
                />
                <Input
                    type="text"
                    label="Descrição"
                    name="description"
                    placeholder=""
                    className="insert-input"
                />
                <Input
                    type="number"
                    label="Commits"
                    name="commits"
                    placeholder=""
                    className="insert-input"
                />
                <Input
                    type="text"
                    label="Data de Publicação"
                    name="publicationDate"
                    placeholder=""
                    className="insert-input"
                />
                <Input
                    type="text"
                    label="Linguagem Principal"
                    name="mainLanguage"
                    placeholder=""
                    className="insert-input"
                />
                <Input
                    type="text"
                    label="Link do Repositório"
                    name="repositoryLink"
                    placeholder=""
                    className="insert-input"
                />
                <button class="save-form">Salvar</button>
            </form>
            <div className="custom-footer">
                <Footer />
            </div>
        </div>
    );
}

export default RegisterProject;
