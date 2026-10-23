'use client';
// import { cookies } from "next/headers"
// import { ProjectInfo } from "../adminComponents/ProjectInfo"
import { useState,useEffect } from "react"
import axios from "axios"
// import { AdminNav } from "../adminComponents/AdminNav"
import UserList from "../../adminComponents/UserList"
export default  function admin ()  {
 
// const cookiestore = await cookies()
const [users,setUsers]= useState([])
useEffect( ()=>{
  const fetchUsers = async()=>{
    try{

      const response = await axios.get("http://localhost:7070/me",{withCredentials:true})
      const username = response.data.user.username
      setUsers(username)
    }catch(error){
      console.error(error)
    }
  }
  fetchUsers()
},[])
console.log(users)

// const log = cookiestore.get('loggedIn')

  
  return (
    <section className=" max-h-screen items-center justify-center overflow-hidden px-4 py-10 text-white ">
     <h1 className="   text-3xl mb-3" >
      Welcome back, {users}
     </h1>
     <UserList/>
        {/* <ProjectInfo/> */}
    </section>
  )
}
