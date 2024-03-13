"use client";
import { useState } from "react";
import "./Header.scss";

import { Logo } from "./Logo";
import Navbar from "./Navbar";
import ThemeChanger from "./Switch";

const Header = ({ lock }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openHandler = () => {
        // !isOpen ? setIsOpen(true) : setIsOpen(false);
        if (!isOpen) {
            setIsOpen(true);
            lock(true);
        } else {
            setIsOpen(false);
            lock(false);
        }
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <Logo setIsOpen={setIsOpen} lock={lock} />
                    <ThemeChanger />
                    <Navbar isOpen={isOpen} setIsOpen={setIsOpen} lock={lock} />

                    <div className="burger" onClick={openHandler}>
                        {!isOpen ? <span> Menu </span> : <span> Close </span>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
