import Link from "next/link";
import { LogoSvg } from "../Icons";

export const Logo = ({ setIsOpen, lock }) => {
    const clickLogoHandler = () => {
        setIsOpen(false);
        lock(false);
    };

    return (
        <div className="logo">
            <Link onClick={clickLogoHandler} href="/">
                <LogoSvg />
            </Link>
        </div>
    );
};
