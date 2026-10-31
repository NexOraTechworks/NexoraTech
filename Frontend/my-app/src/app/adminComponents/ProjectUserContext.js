
'use client';

import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
} from 'react';

import { useRouter } from 'next/navigation';
import axios from 'axios';

const ProjectUserContext = createContext(null);

export function ProjectUserProvider({ children }) {
    const router = useRouter();

    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    const [projectsLoading, setProjectsLoading] = useState(true);
    const [usersLoading, setUsersLoading] = useState(true);
    const [userLoading, setUserLoading] = useState(true);

    const [projectsError, setProjectsError] = useState('');
    const [usersError, setUsersError] = useState('');
    const [userError, setUserError] = useState('');
    const [deleteProjectError, setDeleteProjectError] = useState('');
    const [deleteUserError, setDeleteUserError] = useState('');

    // Handle expired or deleted user sessions
    const handleSessionExpiry = useCallback(async () => {
        setUser(null);
        setUsers([]);
        setProjects([]);

        try {
            await axios.post('/api/auth/logout');
        } catch (error) {
            console.error('Failed to clear authentication cookie:', error);
        } finally {
            router.replace('/admin/login');
            router.refresh();
        }
    }, [router]);

    // Fetch projects
    const fetchProjects = useCallback(async () => {
        setProjectsLoading(true);

        try {
            setProjectsError('');

            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`,
                { withCredentials: true }
            );

            const fetchedProjects = response.data?.data;

            if (!Array.isArray(fetchedProjects)) {
                throw new Error('Invalid projects response');
            }

            setProjects(fetchedProjects);
        } catch (error) {
            console.error('Failed to fetch projects:', error);

            setProjectsError(
                error.response?.data?.message ||
                error.message ||
                'Unable to fetch projects'
            );
        } finally {
            setProjectsLoading(false);
        }
    }, []);

    // Delete project
    const deleteProjects = useCallback(async (id) => {
        try {
            setDeleteProjectError('');

            await axios.delete(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${id}`,
                { withCredentials: true }
            );

            setProjects((prevProjects) =>
                prevProjects.filter(
                    (project) => project.id !== id
                )
            );

            return true;
        } catch (error) {
            console.error('Failed to delete project:', error);

            setDeleteProjectError(
                error.response?.data?.message ||
                error.message ||
                'Unable to delete project'
            );

            return false;
        }
    }, []);

    // Fetch logged-in user
    const fetchMe = useCallback(async () => {
        setUserLoading(true);

        try {
            setUserError('');

            // Use Next.js proxy instead of calling Render directly
            const response = await axios.get('/api/auth/me');

            const fetchedUser =
                response.data?.data ?? response.data?.user;

            if (!fetchedUser || typeof fetchedUser !== 'object') {
                throw new Error('Invalid /me response');
            }

            setUser(fetchedUser);

        } catch (error) {
            console.error('Failed to fetch logged-in user:', error);

            setUser(null);

            if (error.response?.status === 401) {
                await handleSessionExpiry();
                return;
            }

            setUserError(
                error.response?.data?.message ||
                error.message ||
                'Unable to fetch logged-in user'
            );

        } finally {
            setUserLoading(false);
        }
    }, [handleSessionExpiry]);

    // Fetch users based on role
    const fetchUsers = useCallback(async () => {
        if (!['admin', 'superadmin'].includes(user?.role)) {
            setUsers([]);
            setUsersError('');
            setUsersLoading(false);
            return;
        }

        setUsersLoading(true);

        try {
            setUsersError('');

            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
                { withCredentials: true }
            );

            const fetchedUsers = response.data?.data;

            if (!Array.isArray(fetchedUsers)) {
                throw new Error('Invalid users response');
            }

            setUsers(fetchedUsers);

        } catch (error) {
            console.error('Failed to fetch users:', error);

            setUsersError(
                error.response?.data?.message ||
                error.message ||
                'Unable to fetch users'
            );

        } finally {
            setUsersLoading(false);
        }
    }, [user?.role]);

    // Delete user
    const deleteUser = useCallback(async (id) => {
        try {
            setDeleteUserError('');

            await axios.delete(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${id}`,
                { withCredentials: true }
            );

            setUsers((prevUsers) =>
                prevUsers.filter((curr) => curr.id !== id)
            );

            return true;

        } catch (error) {
            console.error('Failed to delete User:', error);

            setDeleteUserError(
                error.response?.data?.message ||
                error.message ||
                'Unable to delete User'
            );

            return false;
        }
    }, []);

    // Initial fetch
    useEffect(() => {
        fetchProjects();
        fetchMe();
    }, [fetchProjects, fetchMe]);

    // Fetch users after authentication
    useEffect(() => {
        if (userLoading || !user) return;

        fetchUsers();
    }, [userLoading, user, fetchUsers]);

    return (
        <ProjectUserContext.Provider
            value={{
                projects,
                users,
                user,

                projectsLoading,
                usersLoading,
                userLoading,

                projectsError,
                usersError,
                userError,
                deleteProjectError,
                deleteUserError,

                fetchProjects,
                fetchUsers,
                fetchMe,

                deleteProjects,
                deleteUser,

                setProjects,
                setUsers,
                setUser,
            }}
        >
            {children}
        </ProjectUserContext.Provider>
    );
}

export function useProjectUsers() {
    const context = useContext(ProjectUserContext);

    if (!context) {
        throw new Error(
            'useProjectUsers must be used inside ProjectUserProvider'
        );
    }

    return context;
}
