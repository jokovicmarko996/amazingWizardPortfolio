import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import ProjectList from "../../projects";
import { projectsData } from "../../data";
import RenderModel from "../../components/RenderModel";
// import Staff from "../../components/models/Staff";
// import HatModel from "@/app/components/models/HatModel";
import AboutDetails from "@/app/components/about";
import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("@/app/components/models/HatModel"), {
  ssr: false,
});

/* background generisan sa playground sajta Site: https://playground.com/  */
export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 w-full h-full fixed top-0 left-0 object-cover object-center opacity-25"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className=" relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[50%] sm:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">
            MarkoCode
          </h1>
          <p className=" font-light text-foreground text-lg">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
