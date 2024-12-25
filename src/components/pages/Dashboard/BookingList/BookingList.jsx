import React from 'react';
import useBooking from '../../../Hooks/useBooking';

const BookingList = () => {
  const { bookings } = useBooking();

  // Calculate total bookings and total price
  const totalBookings = bookings.length;
  const totalPrice = bookings.reduce(
    (acc, booking) => acc + parseInt(booking.price),
    0
  );

  return (
    <div className="mt-10 mx-10 bg-white rounded-2xl p-8 shadow-md min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Booking List
      </h2>

      {/* Total Bookings and Price */}
      <div className="flex justify-between text-center mb-8">
        <p className="text-lg font-semibold text-gray-700">
          Total Bookings: <span className="text-[#F63E7B]">{totalBookings}</span>
        </p>
        <p className="text-lg font-semibold text-gray-700">
          Total Price: <span className="text-[#F63E7B]">${totalPrice}</span>
        </p>
      </div>

      {/* Booking Table */}
      <div className="overflow-x-auto rounded-2xl">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-[#F63E7B] text-white">
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={booking._id}
                className={`hover:bg-gray-100 transition duration-300 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <td className="py-3 px-6 text-gray-800 font-medium">
                 {index+1}.  {booking.serviceTitle}
                </td>
                <td className="py-3 px-6 text-gray-600">{booking.email}</td>
                <td className="py-3 px-6 text-[#F63E7B] font-semibold">
                  ${booking.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
