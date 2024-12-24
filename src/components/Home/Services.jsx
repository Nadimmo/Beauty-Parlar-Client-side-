import React, { useState } from 'react';
import useService from '../Hooks/useService';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Services = () => {
    const { services } = useService();
    const [showAll, setShowAll] = useState(false); // State to toggle between limited and all services

    // Determine which services to display
    const displayedServices = showAll ? services : services.slice(0, 3);

    return (
        <div className="mt-20 mx-10">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Our Awesome <span className='text-[#F63E7B]'>Services</span>
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                {displayedServices.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <img
                            src={service.logo}
                            alt={service.title}
                            className="w-12 h-12 mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                            {service.title}
                        </h3>
                        <p
                            className="text-center text-lg font-bold mb-3"
                            style={{ color: "#F63E7B" }}
                        >
                            ${service.price}
                        </p>
                        <p className="text-gray-600 text-center">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <button
                    onClick={() => setShowAll(!showAll)} // Toggle the state
                    className="bg-[#F63E7B] text-white py-2 px-6 rounded-lg shadow-md hover:bg-violet-500 transition-colors duration-300"
                >
                    {showAll ?<><span className='flex justify-between'>Show Less<FaArrowUp className='m-1' /></span>
                        </> :<><span className='flex justify-between'>See More <FaArrowDown className='m-1' /></span>
                    </>}
                </button>
            </div>
        </div>
    );
};

export default Services;
