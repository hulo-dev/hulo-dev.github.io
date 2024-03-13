import "./Work.scss";
const { default: WorkList } = require("./WorkList");

const Work = ({ data }) => {
    return (
        <div id="work" className="works section">
            <div className="container">
                <div className="works__wrap">
                    <div className="work-name">
                        <span className="name">More Projects</span>
                    </div>
                    <WorkList works={data} />
                </div>
            </div>
        </div>
    );
};

export default Work;
