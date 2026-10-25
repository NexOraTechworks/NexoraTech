'use client';

import Loader from '@/app/components/Loader';
import {  useProjectUsers } from '../../adminComponents/ProjectUserContext';
import UserList from '../../adminComponents/UserList';
import ProjectList from '@/app/adminComponents/ProjectList';


export default function Admin() {
    const { user, userLoading } = useProjectUsers();

    if (userLoading) {
        return <Loader/>;
    }

    return (
        <section className="min-h-screen px-4 py-10 text-white">
            <h1 className="mb-3 text-3xl">
                Welcome back, {user?.username ?? 'User'}!
            </h1>
            <div className=' grid  gap-4 '>
            <UserList />
            <ProjectList/>
            </div>
        </section>
    );
}