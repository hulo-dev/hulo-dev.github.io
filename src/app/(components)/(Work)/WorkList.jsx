import WorkItem from "./WorkItem";
import "./WorkList.scss";

const WorkList = ({ works }) => {
    return (
        <ul className="more-list">
            {works.map((item, index) => (
                <WorkItem key={index} item={item.data} />
            ))}
        </ul>
    );
};

export default WorkList;
