import { Button } from "../Button";
import "./Feedback.scss";
import FeedbackSlider from "./FeedbackSlider";

const Feedback = () => {
    return (
        <div className="feedback section">
            <div className="container">
                <div className="feedback__wrap">
                    <div className="feedback-title title">
                        <h2>Feedback</h2>
                    </div>
                    <div className="feedback-contant">
                        <div className="feedback-contant__wrap">
                            <div className="feedback-btn">
                                <Button link="#" name="Become a client" />
                            </div>
                            <div className="feedback-slider">
                                <FeedbackSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
