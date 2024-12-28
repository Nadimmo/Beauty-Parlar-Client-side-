import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const useOrderList = () => {
    const axiosSecure = useAxiosSecure()
    const { data: orders = [] } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const res = await axiosSecure.get('/bookingList')
            return res.data
        }
    })
    return { orders }
}

export default useOrderList