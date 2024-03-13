import Image from "next/image";
import "./SectionImage.scss";

const SectionImage = ({ data, heightImg }) => {

    
    return (
        <div className="section-image">
            <div className="container">
                <div className="section-image__wrap">
                    <div className="img_body" style={{paddingTop: heightImg + '%'}}>
                        <Image  src={data} width={500} height={500} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionImage;