"use client";
import { EffectFade, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const Slider = ({ data }) => {
    return (
        <Swiper
            modules={[EffectFade, Autoplay, FreeMode]}
            loop={true}
            spaceBetween={50}
            effect={"fade"}
            speed={1000}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            slidesPerView={1}
            onSlideChange={() => {}}
        >
            {data.map((e) => (
                <SwiperSlide key={e.id}>
                    <Image
                        className="slide-desc"
                        width={1141}
                        height={347}
                        src={e.data.img.url}
                        alt=""
                    />
                    <div className="project">
                        <div className="project__subtitle">
                            <p>project name:</p>
                        </div>
                        <div className="project__name">
                            <h5>{e.data.project_name[0].text}</h5>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
