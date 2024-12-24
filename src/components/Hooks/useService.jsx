import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useService = () => {
    const axiosPublic = useAxiosPublic()
    const { data: services = [] } = useQuery({
        queryKey: 'service',
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
    return { services }
}

export default useService