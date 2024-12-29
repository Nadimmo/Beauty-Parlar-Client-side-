import React from "react";
import usePayments from "../../../Hooks/usePayments";

const PaymentHistory = () => {
  const { payments } = usePayments(); // Fetch payments using the custom hook

  return (
    <div className="container mx-auto px-4 py-6 rounded-2xl">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Payment History</h2>

      {payments && payments.length > 0 ? (
        <div className="overflow-x-auto shadow-lg rounded-2xl  border border-gray-300">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-pink-100">
                <th></th>
                <th className="px-6 py-3 text-left font-semibold text-pink-700">
                  First Name
                </th>
                <th className="px-6 py-3 text-left font-semibold text-pink-700">
                  Email
                </th>
                <th className="px-6 py-3 text-left font-semibold text-pink-700">
                  Transaction ID
                </th>
                
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-pink-50" : "bg-white"
                  } border-b hover:bg-pink-200 transition duration-150`}
                >
                  <td className="px-6 py-3 text-gray-700">
                    {index+1}. 
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    {payment.name || "N/A"} {/* First Name */}
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    {payment.email || "N/A"} {/* Email */}
                  </td>
                  <td className="px-6 py-3 text-gray-700">
                    {payment.transactionId || "N/A"} {/* Transaction ID */}
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 mt-6">No payment history available.</p>
      )}
    </div>
  );
};

export default PaymentHistory;
