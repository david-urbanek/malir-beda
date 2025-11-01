import {NumberTicker} from "@/components/magicui/number-ticker";
import {TextAnimate} from "@/components/magicui/text-animate";
import React from "react";
import Image from "next/image";

import greyKitchenPainting from '@/app/ui/home-page/assets/sterka-kuchyne-seda.jpg'
import greyStairsPainting from '@/app/ui/home-page/assets/sterka-schody-seda.jpg'
import orangePainting from '@/app/ui/home-page/assets/sterka-oranzova.png'

const About2 = () => {
    return (
        <section className="relative overflow-hidden" id='about'>
            <Image src="bg/bg-hero.svg" className="absolute -z-10 min-w-[100%] min-h-[100%] top-[0%] right-[0%]"
                   alt='Logo firmy Malíř Béďa' width={1772} height={1718}/>
            <div className="flex flex-col gap-28 items-center justify-center">
                <div className="flex flex-col gap-10 text-center md:gap-24 ">
                    <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
                        <TextAnimate animation="blurInUp" by="character" as="h2" duration={0.6} className='max-w-3xl'>
                            Kdo jsem a proč mě zákazníci tak často doporučují
                        </TextAnimate>
                        <p className="text-lg text-muted-foreground md:text-xl">
                            Především si zakládám na <span className="font-semibold text-black">čistotě</span> po práci
                            a férovém vztahu se zákazníkem.
                            Zaměřuji se na <span className="font-semibold text-black">dekorativní stěrky</span>, které
                            dodají interiéru osobitý styl.
                            Používám osvědčené značky jako například <span
                            className="font-semibold text-black">San Marco</span> na stěrky a <span
                            className="font-semibold text-black">Primalex</span> na interierové malby. S těmito značkami mám letité zkušenosti a
                            vím, že
                            zaručují špičkovou kvalitu i dlouhou životnost výsledku.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-12">
                        <Image
                            src={greyKitchenPainting}
                            alt="Stěrka šedá použítá v kuchyni"
                            className="size-full max-h-96 rounded-xl object-cover md:col-span-5"
                        />
                        <Image
                            src={greyStairsPainting}
                            alt="Stěrka šedá použítá na schodech"
                            className="size-full max-h-96 rounded-xl object-cover md:col-span-4"
                        />
                        <Image
                            src={orangePainting}
                            alt="Stěrka oranžova použítá na schodech"
                            className="size-full max-h-96 rounded-xl object-cover md:col-span-3"
                        />
                    </div>
                </div>
                <div className="container flex flex-col gap-16">
                    <h2>
                        Moje zkušenosti v číslech:
                    </h2>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                        <div className="flex flex-col gap-6 border-b pb-8">
                            <div className="text-4xl font-medium md:text-5xl flex gap-1">
                                <NumberTicker
                                    value={60}
                                />
                                <span>+</span>
                            </div>
                            <p className="text-muted-foreground">Spokojených zákazníků</p>
                        </div>
                        <div className="flex flex-col gap-6 border-b pb-8">
                            <div className="text-4xl font-medium md:text-5xl flex gap-1">
                                <NumberTicker
                                    value={30}
                                />
                                <span>+</span>
                            </div>
                            <p className="text-muted-foreground">Let zkušeností</p>
                        </div>
                        <div className="flex flex-col gap-6 border-b pb-8">
                            <div className="text-4xl font-medium md:text-5xl flex gap-1">
                                <NumberTicker
                                    value={150}
                                />
                                <span>+</span>
                            </div>
                            <p className="text-muted-foreground">Pokojů, které už dýchají novou energii</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export {About2};
