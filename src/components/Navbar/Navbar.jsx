import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const Links = (
        <>
            <li>
                <NavLink to={"/"} className="hover:text-primary transition-colors duration-300">Home</NavLink>
            </li>
            <li>
                <NavLink to={"/about"} className="hover:text-primary transition-colors duration-300">About</NavLink>
            </li>
            <li>
                <NavLink to={"/ourTeam"} className="hover:text-primary transition-colors duration-300">Our Team</NavLink>
            </li>
            <li>
                <NavLink to={"/dashboard"} className="hover:text-primary transition-colors duration-300">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to={"/contact"} className="hover:text-primary transition-colors duration-300">Contact</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden flex items-center"
                        aria-label="Toggle Navigation Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {Links}
                    </ul>
                </div>
                <a href="/" className="ml-5">
                    <img
                        src="https://i.ibb.co.com/8gcSWbj/logo.png"
                        alt="Logo"
                        className="w-22 h-10"
                    />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-4">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#F73E7B] hover:bg-violet-500 text-white rounded-lg">Login </a>
            </div>
        </div>
    );
};
