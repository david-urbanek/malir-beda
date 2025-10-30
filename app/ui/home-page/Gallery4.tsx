"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/components/button";
import type { CarouselApi } from "@/components/components/carousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/components/carousel";
import {TextAnimate} from "@/components/magicui/text-animate";


import greyPainting from "@/app/ui/home-page/assets/sterka-seda.jpg";
import interiorPainting from "@/app/ui/home-page/assets/interier-malba.webp";
import greenWallpaper from "@/app/ui/home-page/assets/tapeta-zelena.webp";
import Image from "next/image";


export interface Gallery4Props {
    title?: string;
    description?: string;
}

const data = [
    {
        id: "float-painting",
        title: "Dekorační stěrky: Luxusní povrchy pro Váš interiér",
        description: "Luxusní dekorační stěrky promění Váš interiér v nadčasový prostor plný elegance, originality a moderního stylu. Vhodné pro moderní i klasické prostory, kde vynikne hra světla a textur.",        href: "/sluzby/sterky",
        image: greyPainting,
    },
    {
        id: "interior-painting",
        title: "Interiové malování: Dejte nový život Vašim stěnám",
        description: "Kvalitní interiérové malování s použitím barev Primalex, které zaručují dokonalý vzhled, čistotu a dlouhotrvající kvalitu každého nátěru. Ideální volba pro svěží a útulný domov.",        href: "/sluzby/interiove-malovani",
        image: interiorPainting,
    },
    {
        id: "wallpapering",
        title: "Tapetování: Styl a osobitost na Vašich stěnách",
        description: "Precizní tapetování s důrazem na detail a čistý výsledek. Rád doporučím ověřené značky tapet, nebo použiji ty, které si sami vyberete – pro interiér s charakterem a elegancí.",
        href: "/sluzby/tapety",
        image: greenWallpaper
    },
];


const Gallery4 = ({
                      title = "Jaké služby nabízím?",
                      description = "Každý interiér je jedinečný a každý zákazník má svou vlastní představu." +
                      "Podívejte se na ukázky prací, které proměnily byty, domy i kanceláře",
                  }: Gallery4Props) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const items = data

    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
            setCurrentSlide(carouselApi.selectedScrollSnap());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    return (
        <section className="relative flex w-full flex-col items-center justify-center">
            <div className="container">
                <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
                    <div className="flex flex-col gap-4">
                        <TextAnimate animation="blurInUp" by="character" as="h2" duration={0.6}>
                            {title}
                        </TextAnimate>
                        <p className="max-w-lg text-muted-foreground">{description}</p>
                    </div>
                    <div className="hidden shrink-0 gap-2 md:flex">
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollPrev();
                            }}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollNext();
                            }}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        breakpoints: {
                            "(max-width: 768px)": {
                                dragFree: true,
                            },
                        },
                    }}
                >
                    <CarouselContent className="ml-0 2xl:mr-[max(0rem,calc(50vw-700px))] 2xl:ml-[max(8rem,calc(50vw-700px))]">
                        {items.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="max-w-[320px] pl-[20px] lg:max-w-[500px] lg:min-w-[400px]"
                            >
                                <a href={item.href} className="group rounded-xl">
                                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 h-full bg-[linear-gradient(transparent_20%,var(--primary)_100%)] mix-blend-multiply" />
                                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                                            <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                                                {item.title}
                                            </div>
                                            <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                                                {item.description}
                                            </div>
                                            <div className="flex items-center text-sm">
                                                Zjistit více{" "}
                                                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="mt-8 flex justify-center gap-2">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition-colors ${
                                currentSlide === index ? "bg-primary" : "bg-primary/20"
                            }`}
                            onClick={() => carouselApi?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Gallery4 };
