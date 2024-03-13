import Link from "next/link";
import { FlagIcon, DiagonalArrow } from "../Icons";

const Location = () => {
    return (
        <div className="cart cart-locale">
            <div className="cart__wrap">
                <div className="location">
                    <span>LOCAL TIME 8:00 PM GMT (+3:00) Lviv, UA</span>
                </div>
                <div className="location-btn">
                    <Link
                        href="https://www.koloua.com/en"
                        target="_blank"
                        className="btn"
                    >
                        <FlagIcon />
                        <span>
                            <DiagonalArrow />
                            <DiagonalArrow />
                        </span>
                        <span className="text">support Ukraine</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Location;
