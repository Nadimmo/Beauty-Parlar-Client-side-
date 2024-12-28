import React from 'react'
import useContact from '../../../Hooks/useContact'

const RequestUser = () => {
    const {contacts} = useContact()
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
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts && contacts.length > 0 ? (
                  contacts.map((user, index) => (
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
                      <td className="px-4 py-2 text-gray-800 font-medium">
                        {user.phone}
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
  )
}

export default RequestUser