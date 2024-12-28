import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic'

const useContact = () => {
    const axiosPublic = useAxiosPublic()
    const { data: contacts = [] } = useQuery({
        queryKey: "contacts",
        queryFn: async () => {
            const res = await axiosPublic.get('/contact')
            return res.data
        }
    })


    return { contacts }
}

export default useContact