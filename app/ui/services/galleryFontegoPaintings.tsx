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
import fontegoGreyPainting from "@/app/ui/assets-edited/fontego-sede.webp";
import fontegoGreyWoodPainting from "@/app/ui/assets-edited/fontego-sede-drevo.webp";
import fontegoCopperPainting from "@/app/ui/assets-edited/fontego-medenna.webp";
import fontegoGreyLivingPainting from "@/app/ui/assets-edited/fontego-sede-mistnost.webp";
import fontegoCopperLivingPainting from "@/app/ui/assets-edited/fontego-medenna-mistnost.png";

import Image from "next/image";
import {TextAnimate} from "@/components/magicui/text-animate";

const images = [
    {
        img: fontegoGreyPainting,
        alt: "Šedá stěrka v obývacím pokoji",
    },
    {
        img: fontegoGreyWoodPainting,
        alt: "Šedá stěrka v obývacím pokoji vedle dřevěného sloupu",
    },
    {
        img: fontegoCopperPainting,
        alt: "Měděná stěrka v obývacím pokoji",
    },
    {
        img: fontegoGreyLivingPainting,
        alt: "Šedá stěrka v obývacím pokoji",
    },
    {
        img: fontegoCopperLivingPainting,
        alt: "Měděná stěrka v obývacím pokoji",
    },
    {
        img: greyTvPainting,
        alt: "Šedá stěrka v obývacím pokoji s televizí",
    },

];

const GalleryFontegoPaintings = () => {
    return (
        <section>
            <div className="container">
                <div className='max-w-3/4'>
                    <TextAnimate animation="blurInUp" by="character" as="h2" duration={0.6} className='mb-4 font-semibold'>
                    Fontego - Stěrka s jemným pískovým efektem bez lesku
                    </TextAnimate>
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

export { GalleryFontegoPaintings };
