import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {TextAnimate} from "@/components/magicui/text-animate";
import React from "react";

const testimonials = [
    {
        name: "Petr Novák",
        role: "Majitel rodinného domu",
        avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        content:
            "S prací malířů jsem maximálně spokojený. Stěny jsou krásně čisté a barvy přesně odpovídají tomu, co jsme si vybrali. Navíc vše proběhlo rychle a bez nepořádku.",
    },
    {
        name: "Jana Svobodová",
        role: "Bytová architektka",
        avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
        content:
            "Profesionální přístup od začátku až do konce. Dekorativní stěrky vypadají luxusně a klienti si je nemohou vynachválit.",
    },
    {
        name: "Martin Dvořák",
        role: "Podnikatel",
        avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
        content:
            "Nechal jsem si natřít kanceláře a výsledek předčil očekávání. Fasáda i interiér působí reprezentativně, což je pro firmu klíčové.",
    },
    {
        name: "Eva Novotná",
        role: "Majitelka bytu",
        avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
        content:
            "Rychlá domluva, skvělá komunikace a perfektní výsledek. Obývací pokoj působí úplně jinak – svěže a útulně.",
    },
    {
        name: "Richard Horák",
        role: "Správce budovy",
        avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
        content:
            "Malíři zvládli nátěry chodeb i společných prostor. Oceňuji pečlivost a férovou cenu.",
    },
    {
        name: "Gordon Konečný",
        role: "Restaurátor",
        avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
        content:
            "Potřeboval jsem speciální povrchovou úpravu zdí v historickém objektu. Tým odvedl precizní práci s citem pro detail.",
    },
];

const Testimonial6 = () => {
    return (
        <section>
            <div className="container">
                <Carousel className="w-full">
                    <div className="mb-8 flex justify-between px-1 lg:mb-12">
                        <TextAnimate animation="blurInUp" by="character" as="h2" className="text-2xl font-semibold lg:text-5xl" duration={0.6}>
                            Reference mých klientů
                        </TextAnimate>
                        <div className="flex items-center space-x-2">
                            <CarouselPrevious className="static translate-y-0" />
                            <CarouselNext className="static translate-y-0" />
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
                                        <q className="leading-7 text-foreground/70">
                                            {testimonial.content}
                                        </q>
                                        <div className="mt-6 flex gap-4 leading-5">
                                            <Avatar className="size-9 rounded-full ring-1 ring-input">
                                                <AvatarImage
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                />
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

export { Testimonial6 };
