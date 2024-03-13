import FeaturedItem from "./FeaturedItem";
import "./FeaturedList.scss";

const FeaturedList = ({ elements }) => {
    return (
        <div className="featured-list">
            {elements.map((item) => (
                <FeaturedItem key={item.id} item={item.data} />
            ))}
        </div>
    );
};

export default FeaturedList;
