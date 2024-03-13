import Link from "next/link";

const Mail = () => {
    return (
        <div className="header-mail">
            <Link
                className="mail-link"
                href="mailto:hello@hulo.dev"
                target="_blank"
            >
                hello@hulo.dev
            </Link>
        </div>
    );
};

export default Mail;
