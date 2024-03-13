import { WorkArrowRight } from "../Icons";
import "./WorkItem.scss";

const { default: Link } = require("next/link");

const WorkItem = ({ item }) => {
    const tags = item.tags.split(",");

    return (
        <li className="more-item">
            <Link href={item.link.url} target="_blank">
                <div className="more-item__wrap">
                    <div className="more-title title">
                        <h4>{item.title[0].text}</h4>
                    </div>

                    <div className="more-item-tags">
                        {tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                    <div className="more-icon">
                        <WorkArrowRight />
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default WorkItem;
