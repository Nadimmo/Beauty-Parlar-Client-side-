import axios from 'axios'
import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { useNavigate } from 'react-router-dom'
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()


    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer, ${token}`
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
    
    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, async(error)=> {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        const  status = error.response.status
        if (status === 401 || status === 403) {
           await logOut()
              navigate('/login')
        }
        // Do something with response error
        return Promise.reject(error);
      });
  return axiosSecure
}

export default useAxiosSecure