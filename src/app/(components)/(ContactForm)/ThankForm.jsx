import './ThankForm.scss';
import Image from "next/image";

const ThankForm = () => {
    return(
        <div className="thanks">
            <div className="thanks__wrap">
                <div className="thanks-img">
                    <Image 
                        width={150}
                        height={150}
                        src={'/Thankyou-iconV2.png'}
                        alt="thank"/>
                </div>
                <div className="title">
                    <h2>
                        Thank You!
                    </h2>
                </div>
                <div className="subtitle">
                    <p>
                        Your submission has been received.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ThankForm;