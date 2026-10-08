import Image from "next/image";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className=" font-jakarta " >
      <Hero/>
      <Contact/>
    </div>
  );
}
