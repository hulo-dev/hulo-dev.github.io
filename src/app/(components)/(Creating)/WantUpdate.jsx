import CreatingForm from "./CreatingForm";

const WantUpdate = () => {
    return (
        <div className="cart cart-update">
            <div className="cart__wrap">
                <div className="title">
                    <h2>Want to stay updated</h2>
                </div>
                <div className="subtitle">
                    <p>Sign up for our newsletter to receive updates</p>
                </div>
                <CreatingForm />
            </div>
        </div>
    );
};

export default WantUpdate;
