"use client";
import { usePathname } from "next/navigation";
import Footer from "./(Footer)/Footer";

const ChangeFooter = () => {
    const pathname = usePathname();
    const footer =
        pathname != "/contact/" ? (
            <Footer copy={true} partners={true} btn={false} />
        ) : (
            <Footer
                class_name="footer_contact"
                copy={false}
                partners={true}
                btn={true}
            />
        );

    return footer;
};

export default ChangeFooter;
