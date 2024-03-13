"use client";
import { useRef, useState } from "react";
import { DiagonalArrow } from "../Icons";
import "./Form.scss";
import emailjs from "@emailjs/browser";
import ThankForm from "./ThankForm";

const Form = () => {
    const form = useRef();
    const [thank, setThank] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_277fkue",
                "template_ujqyz3h",
                form.current,
                "b7QbGHOAfTqpLbWmh"
            )
            .then(
                (result) => {
                    if (result.status === 200) {
                        setThank(true);
                    }
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            {!thank && (
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="hidden" name="form_name" value="HULO DEV" />
                    <div className="field">
                        <label>Your name</label>
                        <div className="input-wrap">
                            <input
                                className="text-field"
                                type="text"
                                placeholder="Your name"
                                name="user_name"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label>Your email*</label>
                        <div className="input-wrap">
                            <input
                                className="text-field"
                                type="email"
                                required
                                placeholder="Your email*"
                                name="user_mail"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="input-wrap">
                            <textarea
                                required
                                className="text-field"
                                placeholder="Message*"
                                name="user_message"
                            ></textarea>
                        </div>
                    </div>
                    <div className="submit">
                        <button type="submit" className="btn">
                            Submit
                            <span>
                                <DiagonalArrow />
                                <DiagonalArrow />
                            </span>
                        </button>
                    </div>
                </form>
            )}
            {thank && <ThankForm />}
        </div>
    );
};

export default Form;
