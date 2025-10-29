import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/components/avatar";
import { Button } from "@/components/components/button";
import { Card, CardContent } from "@/components/components/card";
import { Input } from "@/components/components/input";

const Contact14 = () => {
    return (
        <section>
            <div className="container">
                <Card className="rounded-4xl bg-muted w-full border-none">
                    <CardContent className="lg:px-18 relative overflow-hidden py-12 lg:py-24">
                        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-2">
                            <div className="flex flex-col justify-center space-y-6">
                                <p className="text-muted-foreground text-sm font-semibold tracking-tight">
                                    MALIRBEDA.CZ
                                </p>
                                <div className="size-30 bg-foreground relative flex items-center justify-center rounded-3xl p-2.5 shadow-xl">
                                    <div className="bg-background flex size-full items-center justify-center rounded-2xl p-4">
                                        <Avatar className="size-full">
                                            <AvatarImage
                                                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                                                alt="avatar"
                                                className="object-cover"
                                            />
                                            <AvatarFallback>Shadcn</AvatarFallback>
                                        </Avatar>
                                    </div>
                                </div>
                                <h2 className="text-foreground text-5xl font-bold tracking-tighter">
                                    Ozvěte se mi!
                                </h2>

                                <ul className="max-w-lg space-y-2 tracking-tight">
                                    <li className="flex items-center">
                                        <span className="mr-2 font-bold">Email:</span>{" "}
                                        <span className="text-foreground/80 underline">
                      obchod@malirbeda.cz
                    </span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 font-bold">Tekefon:</span>{" "}
                                        <span className="text-foreground/80">
                      +1 (555) 123-4567
                    </span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 font-bold">Address:</span>
                                        <span className="text-foreground/80">
                      123 Design Street, UI City
                    </span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2 font-bold">Hours:</span>{" "}
                                        <span className="text-foreground/80">
                      Mon-Fri, 9am-5pm EST
                    </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6 flex h-auto flex-col gap-2 space-y-3 md:pl-3">
                                <Input placeholder="Name" className="bg-background p-6" />
                                <Input placeholder="Phone" className="bg-background p-6" />

                                <Button className="h-10 w-fit">Kontaktujte mě</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export { Contact14 };
