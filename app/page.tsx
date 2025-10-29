import {Hero210} from "@/app/ui/home-page/Hero210";
import { About2 } from "./ui/home-page/About2";
import {Gallery4} from "@/app/ui/home-page/Gallery4";
import {Testimonial6} from "@/app/ui/home-page/Testimonial6";


export default function Home() {
  return (
      <div className="flex flex-col gap-32">
          <Hero210></Hero210>
          <About2></About2>
          <Gallery4></Gallery4>
          <Testimonial6></Testimonial6>
      </div>
  );
}
