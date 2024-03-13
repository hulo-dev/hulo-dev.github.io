import "./FeaturedItem.scss";
import Link from "next/link";
import Image from "next/image";
import { DiagonalArrow } from "../Icons";

const FeaturedItem = ({ item }) => {
    return (
        <div className="featured-item">
            <div className="featured-item__wrap">
                <div className="featured-image">
                    <Image
                        src={item.img.url}
                        width={item.img.dimensions.width}
                        alt={item.title[0].text}
                        height={item.img.dimensions.height}
                    />
                    <Link href={item.link.url} target="_blank">
                        <div className="btn">
                            View Project
                            <span className="span-svg-wrap">
                                <DiagonalArrow />
                                <DiagonalArrow />
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="featured-item-title title">
                    <h5>{item.title[0].text}</h5>
                </div>
                <div className="featured-item-title subtitle">
                    <p>{item.subtitle[0].text}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;
