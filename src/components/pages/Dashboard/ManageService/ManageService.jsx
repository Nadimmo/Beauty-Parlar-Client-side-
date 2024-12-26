import React from 'react';
import useService from '../../../Hooks/useService';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageService = () => {
  const { services, refetch} = useService();
  const axiosPublic = useAxiosPublic()
//   console.log(services);


    const handlerRemoveService = async (id) => {
        // console.log(id)
        axiosPublic.delete(`/services/${id}`)
        .then((res) => {
            if(res.data.deletedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Service Deleted Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                refetch()
            }
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                showConfirmButton: false,
                timer: 1500
            })
        })
    }

    

  return (
    <div className="min-h-screen bg-gray-100 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center ">Manage Services</h2>
      <div className="overflow-x-auto rounded-2xl">
        <table className="table-auto w-full bg-white rounded-lg shadow-md">
          <thead className="bg-[#F63E7B] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services && services.length > 0 ? (
              services.map((service, index) => (
                <tr
                  key={service.id || index}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="px-4 py-2">
                    <img
                      src={service.logo}
                      alt={service.title}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-2 text-gray-800 font-medium">
                    {service.title}
                  </td>
                  <td className="px-4 py-2 text-gray-800 font-medium">
                    ${service.price}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <Link to={`/dashboard/update/${service._id}`}
                      className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:from-blue-500 hover:to-blue-700 shadow-lg transform hover:scale-105 transition duration-300 mr-2"
                      
                    >
                      Update
                    </Link>
                    <button
                      className="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-full font-semibold hover:from-red-500 hover:to-red-700 shadow-lg transform hover:scale-105 transition duration-300"
                      onClick={() => handlerRemoveService(service._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-4 text-center text-gray-500">
                  No services found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;
