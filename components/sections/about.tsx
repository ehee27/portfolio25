import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `I’m passionate about tech, the environment, fitness and art. I’ve had diverse life experience as a former professional baseball player, a group fitness coach and a commercial actor. I’m a full circle communicator, team-oriented energy giver and a creative problem solver. I’m eager to take the next step in my software development career utilizing my previous work experience, leadership and teamwork abilities.
`;

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center gap-4 bg-black text-white p-24"
    >
      <h2 className="text-5xl font-serif font-bold">About Me</h2>
      <TextGenerateEffect words={words} />
    </section>
  );
}
