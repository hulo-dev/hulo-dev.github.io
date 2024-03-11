import { DiagonalArrow, TestIcon } from "../Icons";
import { createClient } from "@prismicio/client";
import Link from "next/link";
import Slider from "./Slider";
import Partners from "../Partners";

import "./amazing.scss";
import { Button } from "../Button";

const client = createClient("hulo2");

const Amazing = async () => {
    const slides = await client.getByType("amazing_slider");

    return (
        <section className="section section__amazing">
            <div className="container">
                <div className="section__wrap section__amazing-wrap">
                    <div className="amazing__content">
                        <h2 className="amazing__content-title t1">
                            AMAZING CUSTOM&nbsp;
                        </h2>
                        <h2 className="amazing__content-title  t2">
                            <span className="italic">
                                SQUARESPACE & SHOPIFY
                            </span>{" "}
                            DESIGN
                        </h2>
                        <div className="amazing__content-subtitle">
                            <p>
                                Innovative design studio that strives to make
                                substantive changes in web & e-commerce design
                            </p>
                        </div>
                        <div className="amazing__content-button">
                            <Button link="/contact" name="GET" />
                        </div>
                    </div>

                    <div className="amazing__slider-container">
                        <Slider data={slides.results} />
                        <TestIcon />
                        <Partners class_name="amazing__img__block" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Amazing;
