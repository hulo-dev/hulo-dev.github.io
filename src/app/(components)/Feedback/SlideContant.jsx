import Image from "next/image";
import { Quotes } from "../Icons";
import './SlideContant.scss';

const SlideContant = ({name, profession, src_img, description}) => {
    
    return (
        <div className="slide__wrap">
            <div className="slide-description">
                <Quotes/>
                <p>
                    {description}
                </p>
            </div>
            <div className="slide-contant">
                <div className="slide-img">
                    <Image
                        src={src_img}
                        width={120}
                        height={120}
                        alt={name}
                    />
                </div>
                <div className="slide-text">
                    <div className="slide-text__name">
                        <h5>
                            {name}
                        </h5>
                    </div>
                    <div className="slide-text__profession">
                        <p>
                            {profession}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SlideContant;