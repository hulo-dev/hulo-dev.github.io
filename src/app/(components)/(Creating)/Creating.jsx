import StartCreating from "./StartCreating";
import WantUpdate from "./WantUpdate";
import "./Creating.scss";
import Location from "./Location";

const Creating = () => {
    return (
        <div className="creating section">
            <div className="container">
                <div className="creating__wrap">
                    <StartCreating />
                    <WantUpdate />
                    <Location />
                </div>
            </div>
        </div>
    );
};

export default Creating;
