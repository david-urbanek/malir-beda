"use client";

import {motion} from "framer-motion";
import React, {useEffect, useState} from "react";
import {Autoplay, EffectCoverflow} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import {Button} from "@/components/components/button";
import {TextAnimate} from "@/components/magicui/text-animate";

import orangePainting from '@/app/ui/home-page/assets/sterka-oranzova.png'
import greyPainting from '@/app/ui/home-page/assets/sterka-seda.jpg'
import goldenPainting from '@/app/ui/home-page/assets/sterka-zlata.jpg'
import softGreyPainting from '@/app/ui/home-page/assets/sterka-jemne-seda.jpg'
import greyKitchenPainting from '@/app/ui/home-page/assets/sterka-kuchyne-seda.jpg'
import bluePainting from '@/app/ui/home-page/assets/sterka-modra.jpg'

import Image from "next/image";
import Link from "next/link";

const Hero210 = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const images = [
        {
            src: orangePainting,
            alt: "Oranžová stěrka typu Luxury",
        },
        {
            src: greyPainting,
            alt: "Šedá stěrka typu Luxury",
        },
        {
            src: goldenPainting,
            alt: "Zlatá stěrka typu Luxury",
        },
        {
            src: softGreyPainting,
            alt: "Jemně šedá stěrka typu Luxury",
        },
        {
            src: greyKitchenPainting,
            alt: "Šeda stěrka typu Luxury použitá v kuchyni",
        },
        {
            src: bluePainting,
            alt: "Modrá stěrka typu Luxury použitá v kuchyni",
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
                    <TextAnimate animation="blurInUp" by="character" as="h1" duration={0.6}
                                 className="sm:whitespace-nowrap">
                        Malíř pro všechny Vaše projekty
                    </TextAnimate>
                    <p className="text-center lg:text-lg">
                        Vymaluji <span className="font-bold">Váš</span> <span
                        className="font-bold">byt, dům</span> nebo <span className="font-bold">kancelář</span> v Brně a
                        okolí.
                        Rychle, a bez <span className="font-bold">starostí.</span>
                    </p>
                </div>

                <div className="relative mt-12 h-[420px] w-full lg:px-20">
                    <div
                        className="lg:110 absolute left-0 z-10 h-full w-12 bg-gradient-to-r from-background via-white to-transparent md:w-58 lg:left-16"/>
                    <div
                        className="absolute right-0 z-10 h-full w-12 bg-gradient-to-l from-background via-white to-transparent md:w-58 lg:right-16"/>

                    {domLoaded && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.3}}
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
                                        <Image
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
                    <Button className="px-4 py-2 active:scale-105 bg-blue-400 hover:bg-blue-500">
                        <Link href="/kontakt">
                            Kontaktujte mě
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export {Hero210};
