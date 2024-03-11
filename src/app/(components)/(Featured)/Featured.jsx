import FeaturedList from "./FeaturedList";
import FeaturedTitle from "./FeaturedTitle";

const Featured = ({ data, data1}) => {
    return (
        <section id="featured" className="section featured">
            <div className="container">
                <div className="wrap">
                    <FeaturedTitle />
                    <FeaturedList elements={data} data1={data1} />
                </div>
            </div>
        </section>
    );
};

export default Featured;
