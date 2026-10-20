import ThemeToggle from "./ThemeToggle";

export function Navbar(){
    return(
        <nav className=" fixed top-5 z-50 flex justify-between px-6 md::px-0  lg:justify-around  border dark:border-line border-graphite shadow dark:bg-back bg-light   left-1/2 -translate-x-1/2   w-[92%] max-w-4xl rounded-3xl py-3 items-center backdrop-blur-xl         " >
           <a href="#hero">
            <h1 className=" font-jakarta font-bold dark:text-white text-charcoal   " >  
                Nexora tech
            </h1>

           </a>
            <div className=" hidden md:flex justify-between gap-4    items-center space-x-1 font-mon text-xs   " >
            <a href="" className="  text-muted hover:text-slate-800  dark:hover:bg-white/5 py-1.5 px-3.5 rounded-2xl " >Overview</a>
            <a href="#projects" className="  text-muted   dark:hover:bg-white/5 py-1.5 px-3.5 rounded-2xl hover:text-slate-800 " >Projects</a>
            <a href="#stack" className="  text-muted  dark:hover:bg-white/5 py-1.5 px-3.5 rounded-2xl hover:text-slate-800 " >Stack</a>
            <a href="#contact" className="  text-muted   dark:hover:bg-white/5 py-1.5 px-3.5 rounded-2xl transition-colors hover:text-slate-800 " >Contact</a>

            </div>
            <div className=" flex items-center gap-1.5 ">
             <ThemeToggle/>
            <button className="px-4 py-1.5 rounded-full dark:bg-white/10 bg-light  hover:bg-white/20   border border-graphite shadow dark:border-white/10 text-xs font-mono font-medium dark:text-white text-charcoal transition-all duration-500 flex items-center space-x-2"   >
            <span className="w-2 h-2 rounded-full bg bg-emerald animate-pulse" />
            <a href="#contact"> 
            Let's talk
            </a>
            </button>
            </div>

        </nav>
    )
}
