'use client';
import { Menu } from 'lucide-react'
import { ProfileOpt } from './ProfileOpt'
import { useAuth, useProjectUsers } from './ProjectUserContext';
export function Panel({toggleNav}) {
  const { user,userloading } = useProjectUsers();
  console.log(user?.username)
//   if (loading) {
//     return <div>Loading...</div>;
// }
    return (
        <div className=' ' >
            <nav className='bg-[#020B18]   border-b border-[#1A2A48] absolute  left-0 right-0 top-0 flex justify-between md:justify-end h-fit py-4 px-6 '>
            <div className=' md:hidden ' onClick={toggleNav} >
            <Menu size={16} />
            </div>
        
<ProfileOpt username={user?.username ?? ''} />
            </nav>
        </div>
    )
}
