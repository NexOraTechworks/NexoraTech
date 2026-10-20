import Image from "next/image";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { Stack } from "../components/Stack";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <div className=" font-jakarta " >
      <Hero/>
      <Projects/>
      <Stack/>
      <Contact/>
    </div>
  );
}
