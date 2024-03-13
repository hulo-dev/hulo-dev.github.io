import Banner from "./Banner";
import SectionFullImage from "./SectionFullImage";
import SectionGallary from "./SectionGallary";
import SectionImages from "./SectionImages";

import "./SectionText.scss";


 const ProjectItem = ({ data }) => {
    return(
        <div className="project-item">
                <Banner data={ data?.banner[0] }/> 
                <SectionFullImage data={data?.fullimages[0]}/>
                <SectionImages data={data?.images_item[0]}/>
                <SectionGallary data={data?.gallary[0]} />
        </div>
    )
}

export default ProjectItem;