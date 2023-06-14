import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

// TODO: need improvments like do isAdmin and is Instructor in one function.
const useAdmin = () => {
    const token = localStorage.getItem("access-token");
    const { user } = useAuth();
    const { data: isAdmin = false, isLoading: isAdminLoading } = useQuery({
        queryKey: ["isAdmin", user?.email],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_server}/isAdmin/${user.email}`, {
                headers: { authorization: `bearer ${token}` },
            });
            return await res.json();
        },
    });
    // console.log("isAdmin in useAdmin",isAdmin)
    return [isAdmin.admin, isAdminLoading];
};

export default useAdmin;
