
import { Menu } from 'lucide-react'
import { ProfileOpt } from './ProfileOpt'

export function Panel({toggleNav}) {
    return (
        <div className=' ' >
            <nav className='bg-[#020B18]   border-b border-[#1A2A48] absolute  left-0 right-0 top-0 flex justify-between md:justify-end h-fit py-4 px-6 '>
            <div className=' md:hidden ' onClick={toggleNav} >
            <Menu size={16} />
            </div>
               <ProfileOpt />
            </nav>
        </div>
    )
}
