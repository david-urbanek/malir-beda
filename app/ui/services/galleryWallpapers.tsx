"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";


import whitePainting from "@/app/ui/assets-edited/malba-bila-edited.webp";
import whiteRoomPainting from "@/app/ui/assets-edited/malba-bila-pokoj-edited.webp";
import greyWallpaper from "@/app/ui/assets-edited/seda-tapeta-edited.webp";
import blueWallpaper from "@/app/ui/assets-edited/tapeta-modra-edited.webp";
import leafWallpaper from "@/app/ui/assets-edited/tapeta-listy-edited.webp";

import Image from "next/image";

const images = [
    {
        img: greyWallpaper,
        alt: "Šedá tapeta s geometrickým vzorem",
    },
    {
        img: blueWallpaper,
        alt: "Modrá tapeta s geometrickým vzorem",
    },
    {
        img: leafWallpaper,
        alt: "Tapeta s motivem listů",
    },
];

const GalleryWallpapers = () => {
    return (
        <section>
            <div className="container">
                <div className='max-w-3/4'>
                    <h1 className="mb-4 font-medium">
                    Tapetování
                </h1>
                    <p className="text-muted-foreground">
                        Při tapetování pracuji pečlivě a s důrazem na detail, aby výsledek působil čistě a harmonicky.
                        Rád doporučím ověřené značky tapet s dlouhou životností a kvalitním povrchem.
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

export { GalleryWallpapers };
