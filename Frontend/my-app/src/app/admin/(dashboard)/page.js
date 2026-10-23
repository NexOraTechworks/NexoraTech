
import { cookies } from "next/headers"
// import { ProjectInfo } from "../adminComponents/ProjectInfo"

// import { AdminNav } from "../adminComponents/AdminNav"
import UserList from "../../adminComponents/UserList"
export default async function admin ()  {
 
const cookiestore = await cookies()

const log = cookiestore.get('loggedIn')
console.log(log)

  
  return (
    <section className=" max-h-screen items-center justify-center overflow-hidden px-4 py-10 text-white ">
     <h1 className="   text-3xl mb-3" >
      Welcome back, Aakash
     </h1>
     <UserList/>
        {/* <ProjectInfo/> */}
    </section>
  )
}
