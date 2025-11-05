import Image from "next/image";

const sitemap = [
    {
        title: "Company",
        links: [
            {
                title: "About Us",
                href: "#",
            },
            {
                title: "Careers",
                href: "#",
            },
            {
                title: "Contact",
                href: "#",
            },
            {
                title: "Press",
                href: "#",
            },
        ],
    },
    {
        title: "Support",
        links: [
            {
                title: "Help Center",
                href: "#",
            },
            {
                title: "Community",
                href: "#",
            },
            {
                title: "Status",
                href: "#",
            },
            {
                title: "API Docs",
                href: "#",
            },
        ],
    },
];

const Footer6 = () => {
    const date = new Date().getFullYear();

    return (
        <section className="py-16">
            <div className="container mx-auto">
                <footer>
                    <div className="relative mb-8 flex w-full flex-col gap-x-28 gap-y-8 md:flex-row md:justify-between md:gap-y-0 items-center">
                                    <Image
                                        src="/logo/malir-beda-logo.svg"
                                        alt="Maliř Béďa logo"
                                        className="h-full w-36 object-contain object-center"
                                        width="190"
                                        height="44"
                                    />
                        <p className="text-muted-foreground text-base font-medium ml-4">
                            Malování na pohodu a s úsměvem
                        </p>
                    </div>
                    <div className="border-border flex flex-col items-baseline justify-between gap-8 border-t pt-8 md:flex-row md:gap-16">
                        <div className="text-muted-foreground text-xs sm:text-sm">
                            &copy; malirbeda.cz {date}
                        </div>
                        <div className="text-muted-foreground flex flex-col items-start gap-4 text-xs sm:text-sm md:flex-row lg:items-center">
                            <a href="#" className="hover:text-accent-foreground">
                                Terms & Conditions
                            </a>
                            <a href="#" className="hover:text-accent-foreground">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export { Footer6 };
