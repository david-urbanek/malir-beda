"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { Button } from "@/components/ui/button";
import {TextAnimate} from "@/components/magicui/text-animate";

const Hero210 = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const images = [
        {
            src: "https://images.unsplash.com/photo-1651589259121-cecabfcaa2b1?q=80&w=1347&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Portrait of Joan Doe in natural lighting",
            name: "Joan Doe",
        },
        {
            src: "https://images.unsplash.com/photo-1695208145754-abcb6830ad3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3JTIwcGFpbnQlMjByb29tfGVufDB8fDB8fHww",
            alt: "Portrait of Sarah Chen in studio setting",
            name: "Sarah Chen",
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1680297038171-6e3cb6b735d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG5ldyUyMHBhaW50JTIwcm9vbXxlbnwwfDF8MHx8fDA%3D",
            alt: "Portrait of Sarah Chen in studio setting",
            name: "Sarah Chen",
        },
        {
            src: "https://images.unsplash.com/photo-1721395290083-895bf53d6178?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Portrait of Joan Doe in natural lighting",
            name: "Joan Doe",
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1680297038171-6e3cb6b735d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG5ldyUyMHBhaW50JTIwcm9vbXxlbnwwfDF8MHx8fDA%3D",
            alt: "Portrait of Sarah Chen in studio setting",
            name: "Sarah Chen",
        },
        {
            src: "https://images.unsplash.com/photo-1695208145754-abcb6830ad3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3JTIwcGFpbnQlMjByb29tfGVufDB8fDB8fHww",
            alt: "Portrait of Sarah Chen in studio setting",
            name: "Sarah Chen",
        },
        {
            src: "https://m.media-amazon.com/images/I/81+19YoRjVL.jpg",
            alt: "Portrait of Joanna Doe in urban setting",
            name: "Joanna Doe",
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1680297038171-6e3cb6b735d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG5ldyUyMHBhaW50JTIwcm9vbXxlbnwwfDF8MHx8fDA%3D",
            alt: "Portrait of Sarah Chen in studio setting",
            name: "Sarah Chen",
        },
    ];

    const css = `
  .mySwiperHero210 {
    width: 100%;
    height: 420px;
    padding-bottom: 50px;
  }
  
  .mySwiperHero210 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
  }
  
  .mySwiperHero210 .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
    
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `;
    return (
        <section className="flex flex-col items-center justify-center">
            <style>{css}</style>
            <div className="container">
                <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-8">
                    <TextAnimate animation="blurInUp" by="character" as="h1"  duration={0.6} className="sm:whitespace-nowrap">
                        Malíř pro všechny Vaše projekty
                    </TextAnimate>
                    <p className="text-center lg:text-lg">
                        Vymaluji <span className="font-bold">Váš</span> <span className="font-bold">byt, dům</span> nebo <span className="font-bold">kancelář</span> v Brně a okolí.
                        Rychle, bez starostí a vždy se stoprocentním úklidem
                    </p>
                </div>

                <div className="relative mt-12 h-[420px] w-full lg:px-20">
                    <div className="lg:110 absolute left-0 z-10 h-full w-12 bg-gradient-to-r from-background via-white to-transparent md:w-58 lg:left-16" />
                    <div className="absolute right-0 z-10 h-full w-12 bg-gradient-to-l from-background via-white to-transparent md:w-58 lg:right-16" />

                    {domLoaded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <Swiper
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                effect="coverflow"
                                grabCursor={true}
                                slidesPerView="auto"
                                centeredSlides={true}
                                loop={true}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                className="mySwiperHero210"
                                modules={[EffectCoverflow, Autoplay]}
                            >
                                {images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            className="h-full w-full overflow-hidden rounded-3xl object-cover shadow-lg"
                                            src={image.src}
                                            alt={image.alt}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    )}
                </div>

                <div className="relative mx-auto mt-4 flex w-fit justify-center">
                    <Button className="rounded-full px-4 py-2 active:scale-105 bg-blue-400 hover:bg-blue-500">
                        Kontaktujte mě
                    </Button>
                </div>
            </div>
        </section>
    );
};

export { Hero210 };
