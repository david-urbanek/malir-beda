import {Avatar, AvatarImage} from "@/components/components/avatar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/components/carousel";
import {TextAnimate} from "@/components/magicui/text-animate";
import React from "react";
import Image from "next/image";
import avatar from '@/app/ui/home-page/assets/Avatar.png'
import avatarOne from '@/app/ui/home-page/assets/Avatar-1.png'
import avatarTwo from '@/app/ui/home-page/assets/Avatar-2.png'
import avatarThree from '@/app/ui/home-page/assets/Avatar-3.png'
import avatarFour from '@/app/ui/home-page/assets/Avatar-4.png'
import avatarFive from '@/app/ui/home-page/assets/Avatar-5.png'


const testimonials = [
    {
        name: "Petr Novák",
        role: "Majitel rodinného domu",
        avatar: avatar,
        content:
            "Béďa a jeho tým nám dělali dekorativní stěrky v obýváku i ložnici. Výsledek je perfektní – moderní, čistý a přesně podle domluvy. Oceňuji hlavně spolehlivost a férové jednání.",
    },
    {
        name: "Jana Svobodová",
        role: "Bytová architektka",
        avatar: avatarOne,
        content:
            "S Béďou spolupracuji pravidelně na projektech pro své klienty. Jeho dekorativní stěrky působí luxusně, detaily jsou precizní a komunikace naprosto profesionální. Spokojenost na obou stranách.",
    },
    {
        name: "Martin Dvořák",
        role: "Podnikatel",
        avatar: avatarTwo,
        content:
            "Béďův tým dělal dekorativní stěrky v naší firmě a výsledek předčil očekávání. Kanceláře teď působí reprezentativně, práce byla rychlá a bez zbytečných průtahů. Skvělá domluva od začátku do konce.",
    },
    {
        name: "Eva Novotná",
        role: "Majitelka bytu",
        avatar: avatarThree,
        content:
            "Pan Béďa mi dělal dekorativní stěrky v obýváku a jsem z výsledku nadšená! Povrch je nádherný, domluva byla rychlá a přístup naprosto profesionální. Můžu jen doporučit.",
    },
    {
        name: "Richard Horák",
        role: "Správce budovy",
        avatar: avatarFour,
        content:
            "Béďa s kolegy natíral společné prostory a realizoval dekorativní stěrky na chodbách. Oceňuji jejich preciznost, čistotu práce a férový přístup. Výsledek působí reprezentativně a vydrží.",
    },
    {
        name: "Gordon Konečný",
        role: 'Majitel rodinného domu',
        avatar: avatarFive,
        content:
            "Dekorativní stěrky od Bédi ve starším objektu dopadly skvěle. Tým pracoval s citem pro detail, zachoval historický charakter místnosti a výsledek je opravdu unikátní. Spolupráce bez jediného zádrhelu.",
    },
]

const Testimonial6 = () => {
    return (
        <section className="relative flex w-full flex-col items-center justify-center">
            <Image src="/bg/bg-testimonial.png" className="absolute -z-10 min-w-[100%] min-h-[100%] top-[15%] right-[0%]"
                   alt='obrazek v pozadí' width={1532} height={739}/>
            <div className="container">
                <Carousel className="w-full">
                    <div className="mb-8 flex justify-between px-1 lg:mb-12">
                        <TextAnimate animation="blurInUp" by="character" as="h2" duration={0.6}>
                            Reference mých klientů
                        </TextAnimate>
                        <div className="flex items-center space-x-2">
                            <CarouselPrevious className="static translate-y-0"/>
                            <CarouselNext className="static translate-y-0"/>
                        </div>
                    </div>
                    <CarouselContent>
                        {testimonials.map((testimonial, idx) => (
                            <CarouselItem
                                key={idx}
                                className="basis-full md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="h-full p-1">
                                    <div className="flex h-full flex-col justify-between rounded-lg border p-6">
                                        <q className="leading-7 text-gray-700">
                                            {testimonial.content}
                                        </q>
                                        <div className="mt-6 flex gap-4 leading-5">
                                            <Avatar className="size-9 rounded-full ring-input">
                                                <Image src={testimonial.avatar} alt={testimonial.name}></Image>
                                            </Avatar>
                                            <div className="text-sm">
                                                <p className="font-medium">{testimonial.name}</p>
                                                <p className="text-muted-foreground">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export {Testimonial6};
