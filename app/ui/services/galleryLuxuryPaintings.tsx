"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import {TextAnimate} from "@/components/magicui/text-animate";

import bluePainting from "@/app/ui/assets-edited/sterka-modra-edited.webp";
import goldenPainting from "@/app/ui/assets-edited/sterka-zlata-edited.webp";
import orangePainting from "@/app/ui/assets-edited/sterka-oranzova-edited.png";
import luxuryGreyLivingRoomPainting from "@/app/ui/assets-edited/luxury-sede-mistnost.webp";
import luxuryGreyTablePainting from "@/app/ui/assets-edited/luxury-sede-stoly.webp";
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
        img: luxuryGreyLivingRoomPainting,
        alt: "Šedá dekorativní stěrka Luxury v obývacím pokoji",
    },
    {
        img: luxuryGreyTablePainting,
        alt: "Šedá dekorativní stěrka Luxury u jídelního stolu",
    }


];

const GalleryLuxuryPaintings = () => {
    return (
        <section>
            <div className="container">
                <div className='max-w-3/4'>
                        <TextAnimate animation="blurInUp" by="character" as="h2" duration={0.6} className='mb-4 font-semibold'>
                    Luxury - Stěrka s jemným leskem
                            </TextAnimate>

                    <p className="text-muted-foreground">
                        Ideální pro moderní
                        interiéry, kde vynikne hra světla a odlesků. Povrch působí exkluzivně a přesto decentně – perfektní volba
                        pro ty, kteří chtějí dodat prostoru styl a originalitu.
                    </p>
                </div>
                <div className="mt-10 w-full">
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

export { GalleryLuxuryPaintings };
