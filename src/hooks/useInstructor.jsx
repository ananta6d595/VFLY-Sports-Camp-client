import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

/*
    TODO: eikhane user null ashe kichukhon por user pay. Inspect kora lagbe.
    apatoto moe hocche Component mount korar shathe shathe ki user pacche na kichu khon pore pacche.
*/

// TODO: need improvements, like do isAdmin and is Instructor in one function.
const useInstructor = () => {
    const token = localStorage.getItem("access-token");
    const { user } = useAuth();
    // console.log("user in useInstructor:", user?.email);

    const { data: isInstructor = {}, isLoading: isInstructorLoading } =
        useQuery({
            queryKey: ["isInstructor", user?.email],
            queryFn: async () => {
                const res = await fetch(
                    `${import.meta.env.VITE_server}/isInstructor/${user?.email}`,
                    {
                        headers: { authorization: `bearer ${token}` },
                    }
                );
                return await res.json();
            },
        });
    // console.log("isINSSSt:", isInstructor);
    return [isInstructor.instructor, isInstructorLoading];
};

export default useInstructor;
