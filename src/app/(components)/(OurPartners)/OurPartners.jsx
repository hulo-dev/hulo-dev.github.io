import PartnersList from "./PartnersList";
import "./OurPartners.scss";

const OurPartners = () => {
    return (
        <div className="section our-partners">
            <div className="container">
                <div className="our-partners__wrap">
                    <div className="our-partners-name">
                        <span className="name">our partners</span>
                    </div>
                    <div className="partners-contant">
                        <PartnersList />
                        <div className="partner-more">
                            <h5>and 84 more</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPartners;
