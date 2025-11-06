import {GalleryLuxuryPaintings} from "@/app/ui/services/galleryLuxuryPaintings";
import {GalleryFontegoPaintings} from "@/app/ui/services/galleryFontegoPaintings";
import {GalleryCaderoPaintings} from "@/app/ui/services/galleryCadoroPaintings";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Dekorační stěrky',
};

export default function Page() {
    return (
        <div className="flex flex-col items-center container min-w-full gap-16">
            <div className="flex flex-col w-full gap-4 container">
                <h1 className='font-semibold'>Dekorační stěrky</h1>
                <p className="text-muted-foreground">
                    Nabízím široký výběr dekorativních stěrek značky San Marco, které se vyznačují kvalitou, odolností a
                    elegantním vzhledem.
                    Každá realizace je výsledkem poctivé práce, pečlivé přípravy a smyslu pro detail – od moderních
                    interiérů až po útulné domovy.
                </p>
            </div>
            <GalleryLuxuryPaintings></GalleryLuxuryPaintings>
            <GalleryFontegoPaintings></GalleryFontegoPaintings>
            <GalleryCaderoPaintings></GalleryCaderoPaintings>
        </div>);
}