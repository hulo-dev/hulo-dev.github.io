import Partners from "../Partners";
import Copyright from "./Copyright";
import FooterBtn from "./FooterBtn";
import "./Footer.scss";

const Footer = ({ btn, copy, partners, class_name = "" }) => {
    return (
        <footer className={class_name ? "footer " + class_name : "footer "}>
            <div className="container">
                <div className="footer__wrap">
                    {copy && <Copyright />}
                    {partners && <Partners class_name="footer-parters" />}
                    {btn && <FooterBtn />}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
