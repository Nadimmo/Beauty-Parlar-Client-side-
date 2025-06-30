import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaListAlt, FaStar, FaHome, FaClipboardList, FaPlusCircle, FaUserShield, FaTasks, FaPaypal, FaWallet, FaBars } from 'react-icons/fa';
import useAdmin from '../Hooks/useAdmin';
import { FaUserGroup } from 'react-icons/fa6';

const Dashboard = () => {
    const { isAdmin } = useAdmin()
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="min-h-screen">
            <button className='md:hidden p-3 bg-gradient-to-b from-pink-400 via-purple-400-400 to-pink-800 hover:bg-gray-700 transition duration-300' onClick={() => setIsOpen(!isOpen)}>
                <FaBars size={24} />
            </button>
            <div className="flex bg-white min-h-screen ">
                <div className={`lg:w-46 p-6 shadow-md ${isOpen ? "block" : "hidden"} md:block`}>
                    <img
                        src="https://i.ibb.co.com/8gcSWbj/logo.png"
                        alt="Logo"
                        className="w-22 h-10 lg:block hidden"
                    />
                    <br />
                    {isAdmin ? <>
                        <nav className="space-y-2">
                            <NavLink
                                to={'/dashboard/orderList'}
                                className="flex items-center text-gray-700 hover:text-pink-500 transition-colors">
                                <FaClipboardList className="mr-2" /> Order List
                            </NavLink>
                            <NavLink
                                to={'/dashboard/addService'}
                                className="flex items-center text-gray-700 hover:text-pink-500 transition-colors">
                                <FaPlusCircle className="mr-2" /> Add Service
                            </NavLink>
                            <NavLink
                                to={'/dashboard/users'}
                                className="flex items-center text-gray-700 hover:text-pink-500 transition-colors">
                                <FaUserShield className="mr-2" /> Manage Users
                            </NavLink>
                            <NavLink
                                to={'/dashboard/manage'}
                                className="flex  items-center text-gray-700 hover:text-pink-500 transition-colors">
                                <FaTasks className="mr-2" /> Manage Service
                            </NavLink>
                            <NavLink
                                to={'/dashboard/contact'}
                                className="flex  items-center text-gray-700 hover:text-pink-500 transition-colors">
                                <FaUserGroup className="mr-2" /> Request User
                            </NavLink>
                            <NavLink
                                to={'/'}
                                className="flex  items-center text-gray-700 hover:text-pink-500 transition-colors">
                                <FaHome className="mr-2" /> Home
                            </NavLink>
                        </nav>
                    </> : <>
                        <nav className="space-y-2">
                            <NavLink
                                to={'/dashboard/payment'}
                                className="flex  items-center text-gray-700 hover:text-pink-500 transition-colors">
                                <FaWallet className="mr-2" /> Payment
                            </NavLink>
                            <NavLink
                                to={'/dashboard/bookingList'}
                                className="flex  items-center text-gray-700 hover:text-pink-500 transition-colors">
                                <FaListAlt className="mr-2" /> Booking List
                            </NavLink>
                            <NavLink
                                to={'/dashboard/paymentHistory'}
                                className="flex  items-center text-gray-700 hover:text-pink-500 transition-colors">
                                <FaPaypal className="mr-2" /> Payment History
                            </NavLink>
                            <NavLink
                                to={'/dashboard/review'}
                                className="flex items-center text-gray-700 hover:text-pink-500 transition-colors">
                                <FaStar className="mr-2" /> Review
                            </NavLink>
                            <NavLink
                                to={'/'}
                                className="flex  items-center text-gray-700 hover:text-pink-500 transition-colors">
                                <FaHome className="mr-2" /> Home
                            </NavLink>
                        </nav>
                    </>}
                </div>
                <div className="flex-1 bg-gray-50 p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;