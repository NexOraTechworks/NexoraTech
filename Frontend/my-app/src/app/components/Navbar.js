export function Navbar(){
    return(
        <nav className=" fixed top-5 z-50 flex justify-around  border border-line bg-back  left-1/2 -translate-x-1/2   w-[92%] max-w-4xl rounded-3xl py-3 items-center backdrop-blur-xl         " >
           <a href="#hero">
            <h1 className=" font-jakarta font-bold  " >  
                Nexora tech
            </h1>

           </a>
            <div className=" flex justify-between gap-4  items-center space-x-1 font-mon text-xs   " >
            <a href="" className="  text-muted  hover:bg-white/5 py-1.5 px-3.5 rounded-2xl hover:text-white" >Overview</a>
            <a href="" className="  text-muted   hover:bg-white/5 py-1.5 px-3.5 rounded-2xl hover:text-white" >Projects</a>
            <a href="" className="  text-muted   hover:bg-white/5 py-1.5 px-3.5 rounded-2xl hover:text-white " >Career</a>
            <a href="#stack" className="  text-muted  hover:bg-white/5 py-1.5 px-3.5 rounded-2xl hover:text-white" >Stack</a>
            <a href="#contact" className="  text-muted   hover:bg-white/5 py-1.5 px-3.5 rounded-2xl transition-colors hover:text-white" >Contact</a>

            </div>

            <button className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20   border border-white/10 text-xs font-mono font-medium text-white transition-all duration-300 flex items-center space-x-2"   >
            <span className="w-2 h-2 rounded-full bg bg-emerald animate-pulse" />
            <a href="#contact"> 
            Let's talk
            </a>
            </button>

        </nav>
    )
}
