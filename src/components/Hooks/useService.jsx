import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useService = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch, data: services = [] } = useQuery({
        queryKey: ['service'],
        queryFn: async () => {
                const response = await axiosSecure.get('/services')
                return response.data
        }
    })
    return { services, refetch }
}

export default useService