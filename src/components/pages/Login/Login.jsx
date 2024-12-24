import React, { useContext } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

export const Login = () => {
    const {login, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handlerSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        const userInfo = {
            email,
            password
        }
        login(email,password)
        .then(res =>{
            if(res.user){
                Swal.fire({
                    title: 'Logged in successfully!',
                    text: 'You will be redirected to the home page.',
                    icon:'success',
                    confirmButtonText: 'Continue'
                })
                from.reset()
                navigate('/')
            }
        })
        .catch(err =>{
            Swal.fire({
                title: 'Error!',
                text: err.message,
                icon:'error',
                confirmButtonText: 'Try again'
            })
        })
        // console.log(userInfo)
    }

     const handlerGoogle = (e) => {
        e.preventDefault();
        signInWithGoogle()
          .then(res => {
            if (res.user) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
            }
          })
    
      }


    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Sing in an Account
                </h2>
                <form onSubmit={handlerSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F63E7B] focus:outline-none"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F63E7B] focus:outline-none"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#F63E7B] text-white py-2 px-4 rounded-md hover:bg-[#e32d6a] transition-colors"
                    >
                        Sing in
                    </button>
                </form>
                <p className="text-sm text-gray-600 text-center mt-6">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-[#F63E7B] hover:underline">
                        Sign up
                    </Link>
                </p>
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-2 text-gray-500">or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>
                {/* social login */}
                <div>
                    <button onClick={handlerGoogle} className="w-full py-2 px-4 border rounded-2xl flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-100 transition-colors">
                        <FcGoogle className="w-6 h-6  " />
                        <span>Sign up with Google</span>
                    </button>
                    <button className="w-full mt-2 py-2 px-4 border rounded-2xl flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-100 transition-colors">
                        <FaFacebook className="w-6 h-6 text-[#3076FF]" />
                        <span>Sign up with Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
