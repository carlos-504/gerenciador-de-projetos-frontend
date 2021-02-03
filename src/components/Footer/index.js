import React from "react";
import { RiCopyrightLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

import "./style.css";

function Footer() {
    return (
        <footer>
            <div></div>
            <span className="cop-footer">
                Copyright <RiCopyrightLine /> Carlos Henrique
            </span>
            <div className="social-media">
                <a
                    href="https://www.linkedin.com/in/carlos-henrique-64194916a/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-media"
                >
                    <IoLogoLinkedin className="media-icon" title="Linkedin" />
                </a>
                <a
                    href="https://github.com/carlos-504"
                    target="_blank"
                    rel="noreferrer"
                    className="link-media"
                >
                    <AiFillGithub className="media-icon" title="GitHub" />
                </a>
                <a
                    href="https://www.instagram.com/carlosshenriique/"
                    target="_blank"
                    rel="noreferrer"
                    className="link-media"
                >
                    <AiOutlineInstagram
                        className="media-icon"
                        title="Instagram"
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
