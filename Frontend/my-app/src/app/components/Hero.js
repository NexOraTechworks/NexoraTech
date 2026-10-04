import { LiveClock } from "./LiveClock";

export function Hero(){
    return(
        <main className=" min-h-[92vh]  flex flex-col items-center justify-center text-center  pt-28 " >
            <LiveClock/>
            <div className=" flex flex-col justify-center items-center " >

            <h1 className="font-mon text-4xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-[1.05] max-w-5xl mb-8">  
            Architecting
            <span className="italic font-light text-slate-400 font-serif mr-4" >  refined</span>
        interfaces & distributed cloud engines.
            </h1>
            <p className="max-w-2xl text-slate-400 text-base sm:text-lg font-light leading-relaxed mb-10">A hybrid engineer operating at the convergence of high-precision frontend aesthetics, cloud infrastructure, and low-latency systems.</p>
            </div>
        </main>
    )
}