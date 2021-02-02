import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import Sidebar from "./sidebar";
import "./style.css";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <nav className="navbar">
                    <button
                        className="open-toggle"
                        title="Menu"
                        onClick={showSidebar}
                    >
                        <HiMenu className="menu-toggle" />
                    </button>

                    <Link to="#" title="Sair">
                        <IoLogOutOutline className="icon-logout" />
                    </Link>
                </nav>
                <nav className={sidebar ? "side-menu active" : "side-menu"}>
                    <ul className="menu-items">
                        <li className="close-toggle">
                            <Link to="#" className="menu-bars">
                                <MdClose
                                    className="close-icon"
                                    onClick={showSidebar}
                                />
                            </Link>
                        </li>
                        <li className="item-user">
                            <FaUserAlt className="user-icon" />
                        </li>
                        {Sidebar.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className="title-item">
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
