"use client";
import ContactSocial from "./ContactSocial";
import Form from "./Form";
import "./ConntactElement.scss";

const ContactElement = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contact__wrap">
                    <div className="title">
                        <h2>Let’s talk</h2>
                    </div>
                    <div className="contact__left">
                        <ContactSocial />
                    </div>
                    <div className="contact__right">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactElement;
