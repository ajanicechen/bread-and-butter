'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Styles from "./Style.module.css";
import Arrow from "images/arrow.svg";
import { images } from '@/data/images'

export default function Slider() {
    return (
        <div className={Styles.container}>
            <div className={Styles['btn-group']}>
                <button id="prev-btn" className={Styles.button}>
                    <Arrow className={Styles['prev-arrow']} />
                </button>

                <button id="next-btn" className={Styles.button}>
                    <Arrow className={Styles['next-arrow']} />
                </button>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                modules={[Navigation]}
                navigation={{
                    prevEl: '#prev-btn',
                    nextEl: '#next-btn',
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className={Styles.slide}>
                        <img src={image.src} alt={image.alt} />
                        <span className={Styles.description}>
                            <span className={Styles.accent}>{index + 1}/{images.length} </span>{image.description}
                        </span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}