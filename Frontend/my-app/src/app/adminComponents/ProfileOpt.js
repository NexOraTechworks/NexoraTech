
import { User, ChevronDown, LogOut } from "lucide-react"
export function ProfileOpt() {
    return (
        <div>
            <div className="flex items-center gap-1.5 ">
                <div  >
                    <User size={16} />
                </div>
                <h2>
                    Akash
                </h2>
                <ChevronDown size={16} />
            </div>
            {/* <div className=' flex-1 flex flex-col justify-end items-end pb-5 ' >

                <button className=" flex items-center  gap-2  text-muted text-sm   dark:hover:bg-white/5 py-1.5 px-3.5 rounded-2xl transition-colors " >
                    <LogOut size={16} />
                  
                </button>

            </div> */}


        </div>
    )
}
