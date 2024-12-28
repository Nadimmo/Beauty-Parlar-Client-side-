import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic'

const useOrderList = () => {
    const axiosPublic = useAxiosPublic()
    const { data: orders = [] } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const res = await axiosPublic.get('/bookingList')
            return res.data
        }
    })
    return { orders }
}

export default useOrderList