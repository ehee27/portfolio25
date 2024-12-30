import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `I’m passionate about tech, the environment, fitness and art. I’ve had diverse life experience as a former professional baseball player, a group fitness coach and a commercial actor. I’m a team-builder, full circle communicator, and a creative problem solver. I’m eager to take the next step in my software development career utilizing my previous work experience and leadership abilities.
`;

export default function About() {
  return (
    <section
      id="about"
      className="bg-black flex flex-col justify-around items-center px-10 md:px-20 h-[30vh]"
    >
      {/* <h2 className="text-white text-4xl font-bold font-serif">About Me</h2> */}
      <div className="h-[50rem] w-full bg-black bg-grid-small-white/[0.2] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
        {/* <h2 className="text-white text-4xl font-bold font-serif">About Me</h2> */}
        <TextGenerateEffect words={words} />
      </div>
    </section>
  );
}
