import Image from "next/image";
import bg from "../../public/background/home-background.png";
// import Wizard from "./components/models/Wizard";
import RenderModel from "./components/RenderModel";
import Navigation from "./components/navigation/index";
import dynamic from "next/dynamic";

const Wizard = dynamic(() => import("./components/models/Wizard"), {
  ssr: false,
});

/* background generisan sa playground sajta Site: https://playground.com/  */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-screen">
        {/* navigation and 3d model */}
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
