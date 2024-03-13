import Image from "next/image";
import shopifyPartner from "/public/shopify-partners-dark.png"
import circle from "/public/circle-dark.png"
import shopifyPlus from "/public/shopify-plus-dark.png"

const Partners = ({ class_name }) => {
    return (
        <div className={class_name}>
            <a
                className="img-dark"
                target="_blank"
                href="https://www.shopify.com/free-trial?irclickid=QXKzuSR0xzC5WYT1DM1U8zi7UkDVD62APVKQyQ0&irgwc=1&partner=2454069&affpt="
            >
                <Image
                    className="img-dark"
                    width={177}
                    height={28}
                    src={shopifyPartner}
                    alt="1"
                />
            </a>
            <a
                className="img-dark"
                target="_blank"
                href="https://www.squarespace.com/designer/profile/4391176"
            >
                <Image
                    className="img-dark"
                    width={159}
                    height={28}
                    src={circle}
                    alt="2"
                />
            </a>
            <a
                className="img-dark"
                target="_blank"
                href="https://www.shopify.com/free-trial?irclickid=QXKzuSR0xzC5WYT1DM1U8zi7UkDVD62APVKQyQ0&irgwc=1&partner=2454069&affpt="
            >
                <Image
                    className="img-dark"
                    width={109}
                    height={28}
                    src={shopifyPlus}
                    alt="3"
                />
            </a>
        </div>
    );
};

export default Partners;
