import {NumberTicker} from "@/components/magicui/number-ticker";
import {TextAnimate} from "@/components/magicui/text-animate";
import React from "react";

const About2 = () => {
    return (
        <section>
            <div className="flex flex-col gap-28">
                <div className="container flex flex-col gap-10 text-center md:gap-24">
                    <div className="mx-auto flex max-w-3xl flex-col gap-6">
                        <TextAnimate animation="blurInUp" by="character" as="h2" className="text-4xl font-medium md:text-5xl break-normal" duration={0.6}>
                            Kdo jsem a proč mě zákazníci tak často doporučují
                        </TextAnimate>
                        <p className="text-lg text-muted-foreground md:text-xl">
                            Jsem zkušený malíř pokojů s více než 12 lety praxe. Vím, že malování není jen o barvě
                            na stěně, ale o pocitu domova. Pracuji pečlivě, čistě a vždy s ohledem na vaše přání.
                            Používám kvalitní barvy, které vydrží a rozzáří váš interiér
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-12">
                        <img
                            src="https://images.unsplash.com/photo-1603801705797-4f10cd71f49f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFpbnRpbmclMjByb29tfGVufDB8fDB8fHww"
                            alt="placeholder"
                            className="size-full max-h-96 rounded-xl object-cover md:col-span-5"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1603801705834-e653954f39aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="placeholder"
                            className="size-full max-h-96 rounded-xl object-cover md:col-span-4"
                        />
                        <img
                            src="https://plus.unsplash.com/premium_photo-1676321688611-166945b4a041?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBhaW5ldGQlMjByb29tfGVufDB8fDB8fHww"
                            alt="placeholder"
                            className="size-full max-h-96 rounded-xl object-cover md:col-span-3"
                        />
                    </div>
                </div>
                <div className="container flex flex-col gap-16">
                    <h2 className="max-w-3xl text-4xl font-medium md:text-5xl">
                        Moje zkušenosti v číslech
                    </h2>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                        <div className="flex flex-col gap-6 border-b pb-8">
                            <div className="text-4xl font-medium md:text-5xl flex gap-1">
                                <NumberTicker
                                value={250}
                            />
                                <span>+</span>
                            </div>
                            <p className="text-muted-foreground">Spokojených zákazníků</p>
                        </div>
                        <div className="flex flex-col gap-6 border-b pb-8">
                            <div className="text-4xl font-medium md:text-5xl flex gap-1">
                                <NumberTicker
                                    value={22}
                                />
                                <span>+</span>
                            </div>
                            <p className="text-muted-foreground">Let zkušeností</p>
                        </div>
                        <div className="flex flex-col gap-6 border-b pb-8">
                            <div className="text-4xl font-medium md:text-5xl flex gap-1">
                                <NumberTicker
                                    value={654}
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

export { About2 };
