import "./Images.scss"
import Image from "next/image";



const Images = ( { images} ) => {


    return ( 
        <div className="images">
            <div className="container">
                <div className="images__wrap">
                    {images.map((img, key) => <div key={key} className="image-item"> <Image  src={ img } width={500} height={500} alt="" /></div>)}
                </div>
            </div>
        </div>
    )
}

export default Images;