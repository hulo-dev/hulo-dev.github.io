"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, FreeMode } from "swiper";
import "swiper/swiper-bundle.min.css";
import SlideContant from "./SlideContant";
import { NextArrow, PrevArrow } from "../Icons";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./FeedbackSlider.scss";

import f1 from "/public/f1.png"
import f2 from "/public/f2.jpg"
import f3 from "/public/f3.png"
import f4 from "/public/f4.png"


const FEEDBACK_CLIENT = [
    {
        name: "Cody Juhnke",
        profession: "Founder of The Ghost Company",
        description:
            "My team and I love working with hulo! We’ve had the privilege of working  together on  both small and big projects and each time it is a great experience! Strong communication, top-quality work, and just a great team to work hand-in-hand with. You’ll be making a mistake if you DON’T reach out to hulo about your next Squarespace or Shopify project.",
        src_img: f2,
    },
    {
        name: "Kate Bosse",
        profession: "Owner/Creative Director at Mor Creative",
        description:
            "In an industry where developers tend to disappear mid-project... hulo.dev has been our reliable  development team to get the job done. They are prompt, easy to work with, and have a great depth of knowledge over general development, as well as those specific to Squarespace, Shopify, and DevOps. We have been really happy with their work product.",
        src_img: f1,
    },
    {
        name: "Joel Blair",
        profession: "director at Detraform",
        description:
            "Working with hulo.dev has been to a crucial part of building my design practice and allowing me to offer my clients agency level websites.  Their custom coding skills for Squarespace are the best in the industry.",
        src_img: f3,
    },
    {
        name: "Suzie Consoli",
        profession: "Founder of Lawson House",
        description:
            "I can’t recommend hulo enough. They are so wonderful to work with. Pavlo is never overwhelmed by my crazy requests and gives helpful guidance on improving the UX experience for our clients. Their communication is outstanding, and they consistently overdeliver. I am so grateful to have found hulo!",
        src_img: f4,
    },
];

const FeedbackSlider = () => {
    return (
        <Swiper
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
            }}
            spaceBetween={30}
            effect={"fade"}
            modules={[EffectFade, Navigation, FreeMode]}
            className="mySwiper feedback-swiper"
        >
            {FEEDBACK_CLIENT.map((slide, index) => (
                <SwiperSlide key={index}>
                    <SlideContant
                        name={slide.name}
                        profession={slide.profession}
                        src_img={slide.src_img}
                        description={slide.description}
                    />
                </SwiperSlide>
            ))}
            <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                    <PrevArrow />
                </div>
                <div className="swiper-button-next slider-arrow">
                    <NextArrow />
                </div>
            </div>
        </Swiper>
    );
};

export default FeedbackSlider;
