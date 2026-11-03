import Image from "next/image";
import { Hero } from "../components/Hero";
import { Contact } from "../components/Contact";
import { Stack } from "../components/Stack";
import { Projects } from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className=" font-jakarta " >
      <Hero/>
      <Projects/>
      <Stack/>
      <Contact/>
      <Footer/>
    </div>
  );
}
