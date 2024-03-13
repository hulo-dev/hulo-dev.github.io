import Link from "next/link";
import { DesignIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "./Icons";

const Social = ({ class_name }) => {
    return (
        <div className={class_name}>
            <ul>
                <li>
                    <Link
                        href="https://www.instagram.com/hulodev"
                        target="_blank"
                    >
                        <InstagramIcon />
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://www.linkedin.com/company/hulodev"
                        target="_blank"
                    >
                        <LinkedinIcon />
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://www.facebook.com/pg/hulo.dev.agency"
                        target="_blank"
                    >
                        <FacebookIcon />
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://www.squarespace.com/designer/profile/4391176"
                        target="_blank"
                    >
                        <DesignIcon />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Social;
