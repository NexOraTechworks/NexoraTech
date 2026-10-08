import Image from "next/image";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { Stack } from "./components/Stack";

export default function Home() {
  return (
    <div className=" font-jakarta " >
      <Hero/>
      <Stack/>
      <Contact/>
    </div>
  );
}
