/* eslint-disable no-unused-vars */

import useAuth from "./useAuth"
import { getRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
    const { user, loading } = useAuth();
    // const [role, setRole] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     getRole(user?.email)
    //     .then(data => setRole(data))
    //     .finally(() => setLoading(false));
    // },[user])
    // return [role, loading];

    const { data: role, isLoading } = useQuery({
        enabled: !loading && !!user?.email,
        //this means the queryfn will only be called when loading is false and user.email is true
        queryFn: async () => await getRole(user?.email),
        queryKey: ['role']
    });

    return [role, isLoading];
}

export default useRole;