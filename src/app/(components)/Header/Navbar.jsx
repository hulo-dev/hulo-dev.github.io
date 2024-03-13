import NavbarItem from "./NavbarItem";
import "./Navbar.scss";
import Partners from "../Partners";
import Social from "../Social";
import Mail from "./Mail";

const NAVIGATION__LINKS = [
    {
        href: "/#about",
        name: "about",
    },
    {
        href: "/#service",
        name: "services",
    },
    {
        href: "/#work",
        name: "projects",
    },
    {
        href: "/contact",
        name: "Contact US",
    },
];

//"nav-list"

const Navbar = ({ isOpen, isClose, setIsOpen, lock }) => {
    return (
        <nav className={isOpen ? "nav active" : "nav"}>
            <ul className="nav-list">
                {NAVIGATION__LINKS.map((link, index) => (
                    <NavbarItem
                        key={index + "-item"}
                        link={link.href}
                        name={link.name}
                        handlerClose={isClose}
                        setIsOpen={setIsOpen}
                        lock={lock}
                    />
                ))}
            </ul>
            <div className="header-contant">
                <Mail />
                <Social class_name="header-social" />
                <Partners class_name="partners-header" />
            </div>
        </nav>
    );
};

export default Navbar;
