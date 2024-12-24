import React from 'react'
import useAxiosPublic from './useAxiosPublic'
import { useQuery } from '@tanstack/react-query'

const useReview = () => {
    const axiosPublic = useAxiosPublic()
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = axiosPublic.get('reviews')
            return (await res).data
        }
    })
    return {reviews}
}

export default useReview