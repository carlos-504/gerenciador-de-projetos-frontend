import React from "react";
import "./style.css";

function Navbar() {
    return (
        <>
            <nav className="navbar-superior">
                <button className="button-toggle" title="Menu">
                    <div className="toggle-item"></div>
                    <div className="toggle-item"></div>
                    <div className="toggle-item"></div>
                </button>

                <i
                    className="fa fa-sign-out icon-logout"
                    aria-hidden="true"
                    title="Sair"
                ></i>
            </nav>
        </>
    );
}

export default Navbar;
