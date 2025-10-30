"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import greyPainting from "@/app/ui/assets-edited/sterka-bezova-edited.webp";
import bluePainting from "@/app/ui/assets-edited/sterka-modra-edited.webp";
import greyKitchenPainting from "@/app/ui/assets-edited/sterka-seda-kuchyn-edited.webp";
import goldenPainting from "@/app/ui/assets-edited/sterka-zlata-edited.webp";
import orangePainting from "@/app/ui/assets-edited/sterka-oranzova-edited.png";
import greyTvPainting from "@/app/ui/assets-edited/sterka-seda-televize-edited.webp";
import greenPainting from "@/app/ui/assets-edited/sterka-tyrkysova-edited.webp";
import Image from "next/image";

const images = [
    {
        img: orangePainting,
        alt: "Oranžová stěrka jako výrazný akcent",
    },
    {
        img: bluePainting,
        alt: "Modrá dekorativní stěrka",
    },
    {
        img: goldenPainting,
        alt: "Zlatá dekorativní stěrka – akcentní efekt",
    },
    {
        img: greenPainting,
        alt: "Zelena dekorativní stěrka – akcentní efekt",
    },
];

const GalleryLuxuryPaintings = () => {
    return (
        <section>
            <div className="container">
                <div className='max-w-3/4'>
                    <h2 className="mb-4 font-semibold">
                    Luxury - Stěrka s jemným leskem
                </h2>
                    <p className="text-muted-foreground">
                        Ideální pro moderní
                        interiéry, kde vynikne hra světla a odlesků. Povrch působí exkluzivně a přesto decentně – perfektní volba
                        pro ty, kteří chtějí dodat prostoru styl a originalitu.
                    </p>
                </div>
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
                                <CarouselItem key={index} className="basis-1/2 max-h-150">
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

export { GalleryLuxuryPaintings };
