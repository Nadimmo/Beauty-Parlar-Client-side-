import React, { useContext, useState } from 'react';
import useService from '../Hooks/useService';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Services = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const { services } = useService();
    const navigate = useNavigate()
    const [showAll, setShowAll] = useState(false); // State for "See More" button
    const [selectedService, setSelectedService] = useState(null); // State for the selected service

    // Determine which services to display
    const displayedServices = showAll ? services : services.slice(0, 3);

    const handleServiceClick = (service) => {
        setSelectedService(service); // Set the clicked service for modal
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            Swal.fire({
              icon: "warning",
              title: "Login Required",
              text: "Please log in to submit your responses.",
            });
            navigate("/login");
            return;
          }

        const formData = {
            serviceTitle: e.target.title.value,
            name: e.target.name.value,
            email: e.target.email.value,
            price: e.target.price.value,
        };

        //send data to database
        axiosPublic.post('/customerBooking', formData)
            .then(res => {
                console.log(res.data);
                // Show success message
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Service submitted successfully!',
                        text: 'We will contact you shortly.',
                        icon: 'success',
                    });
                    // Clear the form
                    e.target.reset();
                }

            })
            .catch(err => {
                // console.error(err);
                // Show error message
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error submitting your service. Please try again.',
                    icon: 'error',
                });
            })

        // Close the modal
        setSelectedService(null)
    };

    return (
        <div className="mt-20 mx-10">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Our Awesome <span className="text-[#F63E7B]">Services</span>
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                {displayedServices.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                        onClick={() => handleServiceClick(service)}
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
                    onClick={() => setShowAll(!showAll)} // Toggle showing all services
                    className="bg-[#F63E7B] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#e22d6c] transition-colors duration-300"
                >
                    {showAll ? <><span className='flex justify-between'>Show Less<FaArrowUp className='m-1' /></span>
                    </> : <><span className='flex justify-between'>See More <FaArrowDown className='m-1' /></span>
                    </>}
                </button>
            </div>

            {/* Modal */}
            {selectedService && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                        <h2 className="text-2xl font-bold text-center mb-4">
                            Booking for {selectedService.title}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="title"
                                defaultValue={selectedService.title}
                                className="w-full border border-gray-300 p-2 rounded mb-3"
                                readOnly
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 p-2 rounded mb-3"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder='Your Email'
                                className="w-full border border-gray-300 p-2 rounded mb-3"
                                required
                            />
                            <input
                                type="text"
                                name="price"
                                defaultValue={selectedService.price}
                                className="w-full border border-gray-300 p-2 rounded mb-3"
                                readOnly
                            />
                            <button
                                type="submit"
                                className="bg-[#F63E7B] text-white py-2 px-4 rounded w-full hover:bg-[#e22d6c] transition-colors duration-300"
                            >
                                Submit
                            </button>
                        </form>
                        <button
                            onClick={() => setSelectedService(null)} // Close the modal
                            className="text-gray-500 text-sm mt-3 underline text-center block"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
