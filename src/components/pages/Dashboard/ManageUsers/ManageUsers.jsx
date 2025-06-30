import React from 'react';
import userUsers from '../../../Hooks/userUsers';
import Swal from 'sweetalert2';
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import { FaUserCheck } from 'react-icons/fa';

const ManageUsers = () => {
  const { refetch, users } = userUsers();
  const axiosSecure = useAxiosSecure()
 

  const handlerRemove = (id) => {
    axiosSecure.delete(`/users/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'User deleted successfully',
          })
          refetch()
        }
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to delete user',
          text: err.response.data.message
        })
      })
  }

  const handlerMakeAdmin = (id) => {
    axiosSecure.patch(`/users/makeAdmin/${id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'User role updated successfully',
          })
          refetch()
        }
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Failed to update user role',
          text: err.response.data.message
        })
      })
  }




  return (
    <div className="min-h-screen bg-gray-100 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Manage Users</h2>
      <div className="overflow-x-auto rounded-2xl">
        <table className="table-auto w-full bg-white rounded-lg shadow-md">
          <thead className="bg-[#F63E7B] text-white">
            <tr>
              <th></th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2">Actions</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={user.id || index}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="px-4 py-2 text-gray-800 font-medium">
                    {index + 1}.
                  </td>
                  <td className="px-4 py-2 text-gray-800 font-medium">
                    {user.name}
                  </td>
                  <td className="px-4 py-2 text-gray-800 font-medium">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 text-center space-x-2">
                    {user?.role === 'admin' ? <>
                    <FaUserCheck className='ml-20'></FaUserCheck>
                    </> : <button
                      className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-green-500 hover:to-green-700 shadow-lg transform hover:scale-105 transition duration-300"
                      onClick={() => handlerMakeAdmin(user._id)}
                    >
                      Make Admin
                    </button>
                    }

                  </td>
                  <td className="px-4 py-2 text-center space-x-2">
                    <button
                      className="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-red-500 hover:to-red-700 shadow-lg transform hover:scale-105 transition duration-300"
                      onClick={() => handlerRemove(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-4 py-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
