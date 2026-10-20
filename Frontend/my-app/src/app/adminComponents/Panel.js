
import { ProfileOpt } from './ProfileOpt'

export function Panel() {
    return (
        <div className=' ' >
            <nav className='dark:bg-[#020B18]   border-b border-[#1A2A48] absolute  left-0 right-0 top-0 flex justify-end-safe h-fit py-4 px-6     '>
               <ProfileOpt/>
            </nav>
        </div>
    )
}
