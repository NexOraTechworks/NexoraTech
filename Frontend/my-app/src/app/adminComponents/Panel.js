'use client';
import { Menu } from 'lucide-react'
import { ProfileOpt } from './ProfileOpt'
import { useEffect,useState } from 'react';
import axios from 'axios';
export function Panel({toggleNav}) {
    const [users,setUsers]= useState([])
useEffect( ()=>{
  const fetchUsers = async()=>{
    try{

      const response = await axios.get( `${process.env.NEXT_PUBLIC_BACKEND_URL}/me`,{withCredentials:true})
      const username = response.data.user.username
      setUsers(username)
    }catch(error){
      console.error(error)
    }
  }
  fetchUsers()
},[])
    return (
        <div className=' ' >
            <nav className='bg-[#020B18]   border-b border-[#1A2A48] absolute  left-0 right-0 top-0 flex justify-between md:justify-end h-fit py-4 px-6 '>
            <div className=' md:hidden ' onClick={toggleNav} >
            <Menu size={16} />
            </div>
               <ProfileOpt username={users} />
            </nav>
        </div>
    )
}
