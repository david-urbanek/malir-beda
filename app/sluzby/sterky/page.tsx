import {GalleryFloatPaintings} from "@/app/ui/services/galleryFloatPaintings";
import Image from "next/image";

import orangePainting from "@/app/ui/assets-edited/sterka-oranzova-edited.png";

export default function Page() {
    return (
        <>
            <section>
                <div>
                    <h1>Dekorační stěrky</h1>
                    <p>Koukněte se na výber dekoračních stěrek, které nabízím</p>
                </div>
                <div>
                    <div>
                        <h2>
                        Luxury
                    </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolore earum excepturi
                            laboriosam quas, quod quos rem suscipit voluptas voluptatibus? Aspernatur dolor hic ipsum
                            iure labore optio recusandae repellat saepe?
                        </p></div>
                    <div>
                        <Image src={orangePainting} alt={"tralala"}></Image>
                    </div>
                </div>
            </section>
            <GalleryFloatPaintings></GalleryFloatPaintings>
        </>);
}