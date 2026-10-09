import { CopyButton } from "./CopyButton";
import { LiveClock } from "./LiveClock";
import { PopUp } from "./PopUp";
import { TypingTexts } from "./TypingTexts";

export function Hero() {
    
    return (
        <main id="hero" className=" min-h-[92vh]  flex flex-col items-center justify-center text-center  pt-20  " >
            <LiveClock />
            <div className=" flex flex-col justify-center items-center " >

                <h1 className="font-mon text-7xl  font-extrabold dark:text-white text-charcoal  tracking-tighter leading-[1.05] max-w-5xl mb-8">
                    Crafting Scalable Web &
                    Cloud-Native Solutions
                </h1>
                <h2 className=" text-2xl text-slate-400 mb-6 font-mon  " >
                    We specialize in <TypingTexts />
                </h2>
                <p className="max-w-2xl text-slate-400 text-base sm:text-lg font-light leading-relaxed mb-10">
                    A hybrid engineer operating at the convergence of
                    high-precision frontend aesthetics, cloud infrastructure,
                    and low-latency systems.
                </p>
              <CopyButton/>
            </div>
        </main>
    )
}