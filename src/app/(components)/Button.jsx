import Link from "next/link";
import { DiagonalArrow } from "./Icons";

export const Button = ({ link, name, type = "" }) => {
    return (
        <Link className={type ? "btn text" : "btn"} href={link}>
            {name}
            <span>
                <DiagonalArrow />
                <DiagonalArrow />
            </span>
        </Link>
    );
};
