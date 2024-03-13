import Image from "next/image";
import "./PartnersItem.scss";

const PartnersItem = ({ index, item }) => {
    let num = index + 1;
    return (
        <li className="partner-item">
            <div className="partner-item__wrap">
                <div className="partner-item-number">
                    <span>{num < 10 ? "0" + num : num}</span>
                </div>
                <div className="partner-item-title">
                    <h4>{item.title}</h4>
                </div>
                <div className="partner-item-img">
                    <Image
                        src={item.img_src}
                        width={item.image_width}
                        height={item.image_height}
                        alt={item.title}
                    />
                </div>
                <div className="partner-item-year">
                    <h4>{item.year}</h4>
                </div>
            </div>
        </li>
    );
};

export default PartnersItem;
