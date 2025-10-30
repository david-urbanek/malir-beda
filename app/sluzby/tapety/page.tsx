import {GalleryWallpapers} from "@/app/ui/services/galleryWallpapers";


export default function Page() {
    return (
        <div className="flex flex-col items-center container min-w-full gap-16">
            <GalleryWallpapers></GalleryWallpapers>
        </div>);
}