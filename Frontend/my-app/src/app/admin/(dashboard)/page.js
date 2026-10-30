'use client';

import Loader from '@/app/components/Loader';
import { useProjectUsers } from '../../adminComponents/ProjectUserContext';
import UserList from '../../adminComponents/UserList';
import ProjectList from '@/app/adminComponents/ProjectList';
import SystemInfo from '@/app/adminComponents/SystemInfo';


export default function Admin() {
    const { user, userLoading, users, projects } = useProjectUsers();

    if (userLoading) {
        return <Loader />;
    }
    const Data = [{

        title: "User",
        count: users.length,
    }, {

        title: "Project",
        count: projects.length,
    }

    ]
    return (
        <section className="min-h-screen px-4 py-10 text-white">
            <h1 className="mb-1 text-3xl  ">
                Welcome back, <span className=' uppercase bg-linear-to-r to-violet-400 via-purple-400 from-cyan-400 bg-clip-text text-transparent'>
                    {user?.username ?? 'User'}!
                </span>
            </h1>
              <p className=' text-sm text-slate-500 mb-6 ' > Here's what happening with Nexora</p>  
            <div className=' flex gap-3.5 mb-3' >
                {
                    Data.map((data) =>
                        <SystemInfo key={data.title} title={data.title} count={data.count} />

                    )
                }

            </div>
            <div className=' grid  gap-4 '>
                <UserList />
                <ProjectList />
            </div>
        </section>
    );
}