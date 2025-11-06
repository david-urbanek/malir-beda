import {GalleryWallpapers} from "@/app/ui/services/galleryInteriorPaintings";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Interiové malování',
};

export default function Page() {
    return (
        <div className="flex flex-col items-center container min-w-full gap-16">
            <GalleryWallpapers></GalleryWallpapers>
        </div>);
}