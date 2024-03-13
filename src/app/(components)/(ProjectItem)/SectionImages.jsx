import Images from "./Images";
import SectionText from "./SectionText";


const SectionImages = ({ data }) => {
    return (
        <div>
            <SectionText data={data} maxWidth={862} aligment="right"/>
            <Images images={[data?.image.url, data?.images1.url]}/>
        </div>
    )
}

export default SectionImages;