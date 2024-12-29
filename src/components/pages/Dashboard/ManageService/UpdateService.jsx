import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'

const UpdateService = () => {
    const axiosSecure = useAxiosSecure()
    const service = useLoaderData()
    // console.log(services)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.name.value ;
        const description = form.description.value ;
        const price = form.price.value ;
        const updateDoc = { title, description, price }
        // console.log(updateDoc)

        //update data and send in database
        axiosSecure.patch(`/services/${service._id}`, updateDoc)
        .then(res =>{
            if(res.data.matchedCount > 0){
                Swal.fire({
                    icon:'success',
                    title: 'Service updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset()
            }
        })
        .catch(err =>{
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                showConfirmButton: false,
                timer: 1500
            })
            console.log(err)
        })

    }





    return (
        <div className="min-h-screen rounded-2xl flex justify-start items-start py-10 px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full">
                <h2 className="lg:text-2xl font-bold text-center text-gray-800 mb-6">
                    Update Your Service
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="lg:grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-gray-600 mb-1"
                            >
                                Service Title
                            </label>
                            <input
                                defaultValue={service.title}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your service title"
                                className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F63E7B] focus:outline-none"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="price"
                                className="block text-sm font-semibold text-gray-600 mb-1"
                            >
                                Price
                            </label>
                            <input
                                defaultValue={service.price}
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Enter the service price"
                                className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F63E7B] focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="description"
                            className="block text-sm font-semibold text-gray-600 mb-1"
                        >
                            Description
                        </label>
                        <textarea
                            defaultValue={service.description}
                            id="description"
                            name="description"
                            placeholder="Write your description here..."
                            rows="4"
                            className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F63E7B] focus:outline-none"
                            required
                        ></textarea>
                    </div>

                    <div className='flex justify-end items-end'>
                        <button
                            type="submit"
                            className="bg-[#F63E7B] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#e22d6c] transition duration-300"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateService