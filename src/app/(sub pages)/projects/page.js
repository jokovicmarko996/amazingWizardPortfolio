import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "../../projects";
import { projectsData } from "../../data";
import RenderModel from "../../components/RenderModel";
// import Staff from "../../components/models/Staff";
import dynamic from "next/dynamic";

/* import the model dynamicly */
const Staff = dynamic(() => import("../../components/models/Staff"), {
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
      <ProjectList projects={projectsData} />

      <div
        className="flex items-center justify-center fixed top-16 -translate-x-1/2 lg:translate-x-0 -z-10
      left-1/2 lg:top-20 lg:-left-24 h-screen"
      >
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
