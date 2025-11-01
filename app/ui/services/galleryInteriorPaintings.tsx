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
import whitePainting from "@/app/ui/assets-edited/malba-bila-edited.webp";
import whiteRoomPainting from "@/app/ui/assets-edited/malba-bila-pokoj-edited.webp";
import greyRoomPainting from "@/app/ui/assets-edited/malba-seda-edited.webp";

import Image from "next/image";
import {TextAnimate} from "@/components/magicui/text-animate";

const images = [
    {
        img: whitePainting,
        alt: "Bílá zeď",
    },
    {
        img: whiteRoomPainting,
        alt: "Bílá prázdná místnost",
    },
    {
        img: greyRoomPainting,
        alt: "Šedá prázdná místnost",
    },
];

const GalleryWallpapers = () => {
    return (
        <section>
            <div className="container">
                <div className='max-w-3/4'>
                    <TextAnimate animation="blurInUp" by="character" as="h1" duration={0.6} className='mb-4 font-semibold'>
                    Interiové malování
                    </TextAnimate>
                    <p className="text-muted-foreground">
                        Používáme osvědčené barvy Primalex, které zaručují dokonalý vzhled a dlouhotrvající kvalitu
                        každého interiéru. Díky široké paletě odstínů a preciznímu zpracování dosahujeme hladkého,
                        rovnoměrného a esteticky čistého výsledku, který působí svěže a profesionálně. Primalex patří
                        mezi nejspolehlivější značky na trhu, a proto na něj spoléháme při každém projektu – od
                        moderních bytů až po tradiční rodinné domy. Každý nátěr tak nejen skvěle vypadá, ale i odolává
                        času, světlu a každodennímu provozu.
                    </p>
                </div>
                <div className="mt-10">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="mx-auto w-full"
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
