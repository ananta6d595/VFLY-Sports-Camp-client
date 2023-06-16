
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useStudent = () => {
    const token = localStorage.getItem("access-token");
    const { user } = useAuth();
    // console.log("user in useStudent:", user?.email);
    const { data: isStudent = {}, isLoading: isStudentLoading } =
        useQuery({
            queryKey: ["isStudent", user?.email],
            queryFn: async () => {
                const res = await fetch(
                    `${import.meta.env.VITE_server}/isStudent/${user?.email}`,
                    {
                        headers: { authorization: `bearer ${token}` },
                    }
                );


                return await res.json();
            },
        });
    // console.log("isStudent:", isStudent);
    return [isStudent.student, isStudentLoading];
};

export default useStudent;