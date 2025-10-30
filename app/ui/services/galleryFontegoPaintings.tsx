"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import greyFirePainting from "@/app/ui/assets-edited/sterka-krb-edited.webp";
import greyKitchenPainting from "@/app/ui/assets-edited/sterka-seda-kuchyn-edited.webp";
import greyTvPainting from "@/app/ui/assets-edited/sterka-seda-televize-edited.webp";
import Image from "next/image";

const images = [
    {
        img: greyFirePainting,
        alt: "Šedá dekorativní stěrka (Luxury)",
    },
    {
        img: greyKitchenPainting,
        alt: "Šedá stěrka v kuchyňském interiéru",
    },
    {
        img: greyTvPainting,
        alt: "Šedá stěrka za televizí v obývacím pokoji",
    },
];

const GalleryFontegoPaintings = () => {
    return (
        <section>
            <div className="container">
                <div className='max-w-3/4'><h2 className="mb-4 font-semibold">
                    Fontego - Stěrka s jemným pískovým efektem bez lesku
                </h2>
                    <p className="text-muted-foreground">
                        Matná dekorativní stěrka bez lesku, která vyniká svou přirozeností a klidným vzhledem.
                        Vhodná pro minimalistické nebo rustikální interiéry, kde podtrhne strukturu stěn a dodá prostoru
                        útulnou
                        atmosféru. Díky své odolnosti a snadné údržbě je ideální i pro frekventované prostory.
                    </p></div>
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

export { GalleryFontegoPaintings };
