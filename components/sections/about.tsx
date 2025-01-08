import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `I’m passionate about tech, the environment, fitness and art. I’ve had diverse life experience as a former professional baseball player, a group fitness coach and a commercial actor. I’m a team-builder, full circle communicator, and a creative problem solver. I’m eager to take the next step in my software development career utilizing my previous work experience and leadership abilities.
`;

export default function About() {
  return (
    // <section
    //   id="about"
    //   // className="bg-black flex flex-col justify-around items-center px-10 md:px-20 h-[30vh] overflow-hidden"
    //   className="w-[100vw] mx-auto rounded-md h-[100vh] px-10 md:px-40 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    // >
    // <div className="h-[500px] w-full bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center">
    <div className="flex flex-col items-center justify-center h-[40%] w-full px-10">
      <TextGenerateEffect words={words} />
    </div>
    // </section>
  );
}
