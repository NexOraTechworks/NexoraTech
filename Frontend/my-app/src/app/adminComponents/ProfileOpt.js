
import { User, ChevronDown,ChevronUp, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"
export function ProfileOpt({username}) {
  console.log("ProfileOpt received:", username);

     const [toggle,setToggle] = useState(false)
     const [loading, setLoading] = useState(false)
  const router = useRouter()

     const toggleOptions = ()=>{
        setToggle((prev)=>!prev)
     }
     const logOut = async () => {
        try {
          setLoading(true)
          await axios.post( `${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, {}, { withCredentials: true })
          router.replace("/admin/login");
          router.refresh();
        } catch (error) {
          console.log(
            "Logout failed:",
            error.response?.data || error.message
          );
        } finally {
          setLoading(false)
        }
    
      }
    return (
        <div>
            <div className="flex items-center gap-1.5 cursor-pointer" onClick={toggleOptions} >
                <div>
                    <User size={16} />
                </div>
                <h2 className=" text-sm " >
                {username || 'User'}
                </h2>
                {toggle?
                <ChevronUp size={16}/>:
                <ChevronDown size={16} />
                }
            </div>
            <div className={`absolute ${toggle?"opacity-100 pointer-events-auto":"opacity-0 -translate-y-6 pointer-events-none"} transition-all duration-200 bg-[#020B18] border border-[#1A2A48] right-3 p-2 top-15 rounded-lg  flex-1 flex items-center justify-end  pb-5 `} >
        
            <button onClick={logOut} disabled={loading} 
           className="
           flex w-full items-center gap-3
           rounded-lg px-3 py-2.5
           text-sm 
           transition-colors duration-200
           hover:bg-red-500/10
          text-red-400
           focus-visible:outline-none
           focus-visible:ring-2
           focus-visible:ring-violet-500
         " 
            >
            <LogOut size={16} />
            {loading ? "Logging out.." : "Logout"}
          </button>

            </div>


        </div>
    )
}
