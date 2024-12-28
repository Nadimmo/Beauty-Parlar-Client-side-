// import React, { useContext } from 'react'
// import useAxiosSecure from './useAxiosSecure'
// import { AuthContext } from '../AuthProvider/AuthProvider'
// import { useQuery } from '@tanstack/react-query'

// const useAdmin = () => {
//     const axiosSecure = useAxiosSecure()
//     const {user} = useContext(AuthContext)
//     const {data: isAdmin} = useQuery({
//         queryKey: ["isAdmin", user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/makeAdmin/${user?.email}`)
//             return res.data.admin
//         }
//     })
//   return [isAdmin]
// }

// export default useAdmin