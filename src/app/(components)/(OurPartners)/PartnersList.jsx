import PartnersItem from "./PartnersItem";
import "./PartnersList.scss";

const PARTNERS = [
    {
        title: "Ghost Plugins",
        year: "2021",
        img_src: "ghost.png",
        image_width: 138,
        image_height: 158,
    },
    {
        title: "Posture Media",
        year: "2022",
        img_src: "postureMedia.png",
        image_width: 515,
        image_height: 63,
    },
    {
        title: "Sunday Sounds",
        year: "2020",
        img_src: "sound.png",
        image_width: 150,
        image_height: 152,
    },
    {
        title: "Mor Creative",
        year: "2019",
        img_src: "morCreative.png",
        image_width: 162,
        image_height: 153,
    },
    {
        title: "Design by Altitude",
        year: "2022",
        img_src: "designAltitude.png",
        image_width: 463,
        image_height: 107,
    },
    {
        title: "Lawson House",
        year: "2021",
        img_src: "lavsonHouse.png",
        image_width: 471,
        image_height: 101,
    },
];

const PartnersList = () => {
    return (
        <ul className="partner-list">
            {PARTNERS.map((item, index) => (
                <PartnersItem key={index} index={index} item={item} />
            ))}
        </ul>
    );
};

export default PartnersList;
