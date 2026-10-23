
import { User, ChevronDown,ChevronUp, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"
export function ProfileOpt() {
     const [toggle,setToggle] = useState(false)
     const [loading, setLoading] = useState(false)
  const router = useRouter()

     const toggleOptions = ()=>{
        setToggle((prev)=>!prev)
     }
     const logOut = async () => {
        try {
          setLoading(true)
          await axios.post(process.env.NEXT_PUBLIC_LOGOUT_URL, {}, { withCredentials: true })
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
                <h2>
                    Akash
                </h2>
                {toggle?
                <ChevronUp size={16}/>:
                <ChevronDown size={16} />
                }
            </div>
            <div className={`absolute ${toggle?"opacity-100":"opacity-0 -translate-y-6"} transition-all duration-200 bg-[#020B18] border border-[#1A2A48] right-3 p-2 top-15 rounded-lg  flex-1 flex items-center justify-end  pb-5 `} >
        
            <button onClick={logOut} className=" flex items-center  gap-2  text-muted text-sm   hover:text-red-600 p-3  rounded-2xl transition-colors " >
            <LogOut size={16} />
            {loading ? "Logging out.." : "Logout"}
          </button>

            </div>


        </div>
    )
}
