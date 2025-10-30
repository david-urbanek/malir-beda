import {GalleryLuxuryPaintings} from "@/app/ui/services/galleryLuxuryPaintings";
import Image from "next/image";

import orangePainting from "@/app/ui/assets-edited/sterka-oranzova-edited.png";
import greyKitchenPainting from '@/app/ui/assets-edited/sterka-seda-kuchyn-edited.webp'
import beigePainting from '@/app/ui/assets-edited/sterka-bezova-edited.webp'
import {GalleryFontegoPaintings} from "@/app/ui/services/galleryFontegoPaintings";
import {GalleryCaderoPaintings} from "@/app/ui/services/galleryCadoroPaintings";

const data = [
    {
        title: 'Luxury',
        description: 'Dekorativní stěrka s jemným třpytem, která vytváří elegantní a luxusní dojem. ' +
            'Ideální pro moderní ' +
            'interiéry, kde vynikne hra světla a odlesků. Povrch působí exkluzivně a přesto decentně – perfektní volba ' +
            'pro ty, kteří chtějí dodat prostoru styl a originalitu.',
        img: orangePainting
    },
    {
        title: 'Fontego',
        description: 'Matná dekorativní stěrka bez lesku, která vyniká svou přirozeností a klidným vzhledem. ' +
            'Vhodná pro minimalistické nebo rustikální interiéry, kde podtrhne strukturu stěn a dodá prostoru útulnou' +
            ' atmosféru. Díky své odolnosti a snadné údržbě je ideální i pro frekventované prostory.',
        img: greyKitchenPainting
    },
    {
        title: 'Cadoro',
        description: 'Hladká stěrka bez písku s jemným, hedvábným efektem. Působí elegantně a čistě, ' +
            'vytváří lehce sametový povrch, který odráží světlo s jemností a hloubkou. Skvělá volba pro ty, ' +
            'kdo preferují moderní a harmonický vzhled interiéru bez zbytečného lesku.',
        img: beigePainting
    }
]


export default function Page() {
    return (
        <div className="flex flex-col items-center container min-w-full gap-16">
            <div className="flex flex-col w-full gap-4 container">
                <h1 className='font-semibold'>Dekorační stěrky</h1>
                <p className="text-muted-foreground">
                    Nabízím široký výběr dekorativních stěrek značky San Marco, které se vyznačují kvalitou, odolností a elegantním vzhledem.
                    Každá realizace je výsledkem poctivé práce, pečlivé přípravy a smyslu pro detail – od moderních interiérů až po útulné domovy.
                </p>
            </div>
            <GalleryLuxuryPaintings></GalleryLuxuryPaintings>
            <GalleryFontegoPaintings></GalleryFontegoPaintings>
            <GalleryCaderoPaintings></GalleryCaderoPaintings>
        </div>);
}