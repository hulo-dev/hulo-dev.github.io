"use client";
import { DiagonalArrow } from "../Icons";
import "./CreatingForm.scss";
import axios from "axios";
import { useState } from "react";

const url = process.env.API_CONVERTKIT_SUBSCRIBE;
const api_key = process.env.REACT_APP_CONVERTKIT_API_KEY;

const CreatingForm = () => {
    const [message, setMessage] = useState(false);

    const onSubscribe = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const data = { email, api_key };

        try {
            const res = await axios.post(url, data);
            if (res.status === 200) {
                setMessage(true);
            }
        } catch (e) {
            console.log(e.response.data.message);
        }
    };

    return (
        <div>
            <form onSubmit={onSubscribe} method="post" className="form">
                <div className={message ? "input_wrap hidden" : "input_wrap"}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Bruse@wayne.com"
                        autoComplete="email"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={message ? "btn hidden" : "btn"}
                >
                    subscribe
                    <span>
                        <DiagonalArrow />
                        <DiagonalArrow />
                    </span>
                </button>
                {message && (
                    <p className="message">
                        {" "}
                        Success! Now check your email to confirm your
                        subscription.{" "}
                    </p>
                )}
            </form>
        </div>
    );
};

export default CreatingForm;
