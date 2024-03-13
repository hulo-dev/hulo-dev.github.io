import Link from "next/link";
import { DiagonalArrowSmall } from "../Icons";
import "./ContactSocial.scss";

const ContactSocial = () => {
    return (
        <ul className="contact_social">
            <li>
                <Link href="mailto:hello@hulo.dev" target="_blank">
                    hello@hulo.dev
                </Link>
                <DiagonalArrowSmall />
            </li>
            <li>
                <Link
                    href="https://www.squarespace.com/designer/profile/4391176"
                    target="_blank"
                >
                    squarespace marketplace
                </Link>
                <DiagonalArrowSmall />
            </li>
            <li>
                <Link href="https://www.instagram.com/hulodev" target="_blank">
                    instagram
                </Link>
                <DiagonalArrowSmall />
            </li>
            <li>
                <Link
                    href="https://www.linkedin.com/company/hulodev"
                    target="_blank"
                >
                    linkedin
                </Link>
                <DiagonalArrowSmall />
            </li>
            <li>
                <Link
                    href="https://www.facebook.com/pg/hulo.dev.agency"
                    target="_blank"
                >
                    facebook
                </Link>
                <DiagonalArrowSmall />
            </li>
        </ul>
    );
};

export default ContactSocial;
