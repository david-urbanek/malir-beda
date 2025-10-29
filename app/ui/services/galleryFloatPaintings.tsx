"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import greyPainting from "@/app/ui/assets-edited/sterka-seda-edited.webp";
import bluePainting from "@/app/ui/assets-edited/sterka-modra-edited.webp";
import greyKitchenPainting from "@/app/ui/assets-edited/sterka-seda-kuchyn-edited.webp";
import goldenPainting from "@/app/ui/assets-edited/sterka-zlata-edited.webp";
import orangePainting from "@/app/ui/assets-edited/sterka-oranzova-edited.png";
import greyTvPainting from "@/app/ui/assets-edited/sterka-seda-televize-edited.webp";
import Image from "next/image";

const images = [
    {
        img: greyPainting,
        alt: "Šedá dekorativní stěrka (Luxury)",
    },
    {
        img: bluePainting,
        alt: "Modrá dekorativní stěrka",
    },
    {
        img: greyKitchenPainting,
        alt: "Šedá stěrka v kuchyňském interiéru",
    },
    {
        img: goldenPainting,
        alt: "Zlatá dekorativní stěrka – akcentní efekt",
    },
    {
        img: orangePainting,
        alt: "Oranžová stěrka jako výrazný akcent",
    },
    {
        img: greyTvPainting,
        alt: "Šedá stěrka za televizí v obývacím pokoji",
    },
];

const GalleryFloatPaintings = () => {
    return (
        <section className="py-32">
            <div className="container">
                <h2 className="mb-4 text-4xl font-semibold">
                    Nechte se inspirovat ukazkou mých realizací
                </h2>
                <p className="text-muted-foreground text-sm">
                    Každý prostor si zaslouží pečlivý přístup a cit pro detail.
                    <br />
                    Prohlédněte si ukázky mých realizací.
                </p>
                <div className="mt-10">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="mx-auto w-full max-w-6xl"
                    >
                        <CarouselContent
                            style={{
                                backfaceVisibility: "hidden",
                            }}
                        >
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="basis-1/2">
                                    <Image
                                        src={image.img}
                                        alt={image.alt}
                                        className='rounded-lg h-full'
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="scale-120 left-5 border-none bg-black/30 text-white hover:bg-black/50 hover:text-white dark:bg-black/30 dark:hover:bg-black/50" />
                        <CarouselNext className="scale-120 right-5 border-none bg-black/30 text-white hover:bg-black/50 hover:text-white dark:bg-black/30 dark:hover:bg-black/50" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export { GalleryFloatPaintings };
