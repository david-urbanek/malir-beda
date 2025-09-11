import {Hero210} from "@/components/home-page/Hero210";
import {About2} from "@/components/home-page/About2";
import {Testimonial6} from "@/components/home-page/Testimonial6";
import {Gallery4} from "@/components/home-page/Gallery4";


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
