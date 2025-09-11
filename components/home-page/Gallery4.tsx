"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import {TextAnimate} from "@/components/magicui/text-animate";

export interface Gallery4Item {
    id: string;
    title: string;
    description: string;
    href: string;
    image: string;
}

export interface Gallery4Props {
    title?: string;
    description?: string;
    items: Gallery4Item[];
}

const data = [
    {
        id: "interior-painting",
        title: "Interiérové malování: Nový život pro váš domov",
        description:
            "Profesionální malování interiérů s důrazem na čistotu, kvalitu a dlouhou životnost. Od běžného malování stěn až po moderní dekorativní stěrky a speciální povrchové úpravy.",
        href: "/sluzby/interier",
        image:
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
        id: "exterior-painting",
        title: "Exteriérové nátěry: Ochrana a styl fasád",
        description:
            "Kompletní nátěry a renovace fasád, které chrání váš dům před povětrnostními vlivy a zároveň mu dodají moderní vzhled.",
        href: "/sluzby/exterier",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
        id: "decorative-plaster",
        title: "Dekorativní stěrky a benátský štuk",
        description:
            "Luxusní povrchové úpravy stěn – betonové, mramorové nebo metalické efekty. Přeměňte svůj interiér v moderní a elegantní prostor.",
        href: "/sluzby/dekorativni-sterky",
        image:
            "https://www.barvy-sanmarco.cz/wp-content/uploads/dekoracni-sterka-imitace-betonu-benatsky-stuk-marmorino-barvy-san-marco-brno08b.jpg",
    },
    {
        id: "wood-metal",
        title: "Nátěry dřeva a kovů",
        description:
            "Ošetření a ochrana dřevěných i kovových povrchů – ploty, zábradlí, dveře i okna. Estetika a dlouhá životnost v jednom.",
        href: "/sluzby/drevo-kov",
        image:
            "https://images.unsplash.com/photo-1721395290083-895bf53d6178?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "renovations",
        title: "Renovace a úklid po malování",
        description:
            "Kompletní servis včetně zakrývání, úklidu a renovace poškozených povrchů. Váš prostor vrátíme do perfektního stavu bez starostí.",
        href: "/sluzby/renovace",
        image:
            "https://plus.unsplash.com/premium_photo-1676321688611-166945b4a041?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const Gallery4 = ({
                      title = "Jaké služby nabízím?",
                      description = "Každý interiér je jiný a každý zákazník má jinou představu." +
                      " Podívejte se na několik příkladů, jak proměňujeme byty, domy i kanceláře",
                      items = data,
                  }: Gallery4Props) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

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
        <section>
            <div className="container">
                <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
                    <div className="flex flex-col gap-4">
                        <TextAnimate animation="blurInUp" by="character" as="h2" className="text-3xl font-medium md:text-4xl lg:text-5xl" duration={0.6}>
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
                                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                            >
                                <a href={item.href} className="group rounded-xl">
                                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-5/4 lg:aspect-16/9">
                                        <img
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
