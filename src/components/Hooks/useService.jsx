import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useService = () => {
    const axiosPublic = useAxiosPublic()
    const {refetch, data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
                const response = await axiosPublic.get('/services')
                return response.data
        }
    })
    return { services, refetch }
}

export default useService