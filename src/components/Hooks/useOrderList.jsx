import React from 'react'
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query'

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