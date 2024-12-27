import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'

const useBooking = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: bookings = [] } = useQuery({
        queryKey: ["bookings",user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/customerBooking?email=${user?.email}`)
            return res.data
        }


    })
    return { bookings }
}

export default useBooking