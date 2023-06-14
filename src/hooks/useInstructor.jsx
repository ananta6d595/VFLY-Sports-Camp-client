import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

// TODO: need improvements, like do isAdmin and is Instructor in one function.
const useInstructor = () => {
    const token = localStorage.getItem("access-token");
    const { user } = useAuth();
    const { data: isInstructor = false, isLoading: isInstructorLoading } = useQuery({
        queryKey: ["isInstructor", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `${import.meta.env.VITE_server}/instructor/${user.email}`,
                {
                    headers: { authorization: `bearer ${token}` },
                }
            );
            return await res.json();
        },
    });
    return [isInstructor.instructor, isInstructorLoading];
};

export default useInstructor;
