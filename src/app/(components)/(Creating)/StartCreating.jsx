import { Button } from "../Button";

const StartCreating = () => {
    return (
        <div className="cart cart-start">
            <div className="cart__wrap">
                <div className="title">
                    <h2>Start Creating With Us</h2>
                </div>
                <div className="subtitle">
                    <p>
                        When working with us, you get an amazing website design
                        with a simple to use yet engaging interface on time and
                        on budget.
                    </p>
                </div>
                <Button link="/contact" name="Start a Project" />
            </div>
        </div>
    );
};

export default StartCreating;
