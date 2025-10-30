"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import beigePainting from "@/app/ui/assets-edited/sterka-bezova-edited.webp";
import bluePainting from "@/app/ui/assets-edited/sterka-zluta-edited.webp";
import Image from "next/image";

const images = [
    {
        img: beigePainting,
        alt: "Šedá dekorativní stěrka (Luxury)",
    },
    {
        img: bluePainting,
        alt: "Modrá dekorativní stěrka",
    },
];

const GalleryCaderoPaintings = () => {
    return (
        <section>
            <div className="container">
                <div className='max-w-3/4'>
                    <h2 className="mb-4 font-semibold">
                    Cadoro - Hladká stěrka bez písku
                </h2>
                    <p className="text-muted-foreground">
                        Hladká stěrka bez písku s jemným, hedvábným efektem. Působí elegantně a čistě,
                        vytváří lehce sametový povrch, který odráží světlo s jemností a hloubkou. Skvělá volba pro ty,
                        kdo preferují moderní a harmonický vzhled interiéru bez zbytečného lesku.
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

export { GalleryCaderoPaintings };
