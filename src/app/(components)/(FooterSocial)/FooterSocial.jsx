import Link from "next/link";
import { FooterSocialDesigIcon } from "../Icons";
import "./FooterSocial.scss";

const FooterSocial = ({ class_name }) => {
    return (
        <div className={class_name}>
            <div className="container">
                <ul>
                    <li>
                        <Link
                            className="italic"
                            href="mailto:hello@hulo.dev"
                            target="_blank"
                        >
                            hello@hulo.dev
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/company/hulodev"
                            target="_blank"
                        >
                            linkedin
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.facebook.com/pg/hulo.dev.agency"
                            target="_blank"
                        >
                            facebook
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.instagram.com/hulodev"
                            target="_blank"
                        >
                            instagram
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="bold"
                            href="https://www.squarespace.com/designer/profile/4391176"
                            target="_blank"
                        >
                            <FooterSocialDesigIcon />
                            designer
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterSocial;
