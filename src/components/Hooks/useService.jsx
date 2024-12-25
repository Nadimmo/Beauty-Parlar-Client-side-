import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useService = () => {
    const axiosPublic = useAxiosPublic()
    const {refetch, data: services = [] } = useQuery({
        queryKey: ['service'],
        queryFn: async () => {
            try {
                const response = await axiosPublic.get('/services')
                return response.data
            } catch (error) {
                console.error('Error fetching service data:', error)
                throw error
            }
        }
    })
    return { services, refetch }
}

export default useService