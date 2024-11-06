import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import ProjectList from "../../projects";
import { projectsData } from "../../data";
import RenderModel from "../../components/RenderModel";
import Staff from "../../components/models/Staff";
import HatModel from "@/app/components/models/HatModel";
import AboutDetails from "@/app/components/about";
import Form from "@/app/components/contact/Form";

/* background generisan sa playground sajta Site: https://playground.com/  */
export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 w-full h-full fixed top-0 left-0 object-cover object-center opacity-25"
      />
      <article className="relative w-full flex flex-col py-8 sm:py-0 items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center w-full space-y-6 sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response.
          </p>
        </div>

        <Form />
      </article>
    </>
  );
}
