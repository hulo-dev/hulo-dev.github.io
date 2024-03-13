'use client';
import Link from "next/link";
import "./NavbarItem.scss";
import React from "react";
//import { Link } from 'react-scroll';
const NavbarItem = ({ link, name, setIsOpen, lock }) => {
    const linkCLickHandler = (e) => {
        setIsOpen(false);
        lock(false);
    };

    return (
        <li>
            <Link
                onClick={linkCLickHandler}
                className="nav-link"
                href={link}
                scroll={false}
            >
                {name}
            </Link>
        </li>
    );
};

export default NavbarItem;
