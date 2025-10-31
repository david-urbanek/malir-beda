import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/components/avatar";
import { Button } from "@/components/components/button";
import { Card, CardContent } from "@/components/components/card";
import { Input } from "@/components/components/input";
import ContactForm from "@/app/ui/contact/contactForm";
import {Separator} from "@/components/ui/separator";

const Contact14 = () => {
    return (
        <section>
            <div className="container">
                <Card className="rounded-4xl bg-gray-100/30 backdrop-blur-sm w-full border border-gray-200">
                    <CardContent className="lg:px-18 relative overflow-hidden py-12 lg:py-24">
                        <div className='grid grid-cols-1 md:grid-cols-2 items-start gap-12'>
                            <div className="flex flex-col justify-center space-y-6">
                                <p className="text-muted-foreground text-sm font-semibold tracking-tight">
                                    malirbeda.cz
                                </p>
                                <h2 className="text-foreground text-5xl font-bold tracking-tighter">
                                    Ozvěte se mi!
                                </h2>

                                <ul className="max-w-lg space-y-2 tracking-tight">
                                        <li className="flex items-center">
                                            <span className="mr-2 font-bold">Email:</span>{" "}
                                            <a  className="text-foreground/80 hover:underline" href="mailto:info@malirbeda.cz?subject=Poptávka%20malování&body=Dobrý%20den,">
                                                info@malirbeda.cz
                                            </a>
                                        </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 font-bold">Telefon:</span>{" "}
                                        <a className="text-foreground/80 hover:underline" href="tel:+420734575101">+420 734 575 101</a>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 font-bold">Adresa:</span>
                                        <a className="text-foreground/80 hover:underline" href="https://maps.app.goo.gl/95j56UPLCqBDaK9eA" target="_blank">
                                            Slavkov u Brna, Slunečná 1715
                                        </a>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 font-bold">IČ:</span>{" "}
                                        <span className="text-foreground/80">
                      734 575 101
                    </span>
                                    </li>
                                </ul>
                            </div>
                            <ContactForm />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export { Contact14 };
