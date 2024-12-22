import React from "react";
import 'swiper/css';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Nash Patrik",
            role: "CEO, Manpol",
            image: "https://i.ibb.co.com/DYDMDBy/Ellipse-90.png", // Replace with actual image URL
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.",
            rating: 5,
        },
        {
            id: 2,
            name: "Miriam Barron",
            role: "CEO, Manpol",
            image: "https://i.ibb.co.com/QpNDpmR/Ellipse-91.png", // Replace with actual image URL
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.",
            rating: 5,
        },
        {
            id: 3,
            name: "Bria Malone",
            role: "CEO, Manpol",
            image: "https://i.ibb.co.com/ZWzykDF/Ellipse-92.png", // Replace with actual image URL
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.",
            rating: 5,
        },
        {
            id: 4,
            name: "Miriam Barron",
            role: "CEO, Manpol",
            image: "https://i.ibb.co.com/QpNDpmR/Ellipse-91.png", // Replace with actual image URL
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas.",
            rating: 5,
        },
    ];

    return (
        <div className="mt-28 mx-10 mb-5">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-[#F63E7B] mb-12">Testimonials</h2>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:bg-gray-100">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full mb-4"
                                />
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                                <p className="text-sm text-gray-600 my-4">{testimonial.text}</p>
                                <div className="flex">
                                    {Array(testimonial.rating)
                                        .fill(0)
                                        .map((_, index) => (
                                            <svg
                                                key={index}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-yellow-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.376 2.454c-.783.57-1.838-.197-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.64 8.394c-.783-.57-.38-1.81.588-1.81h4.167a1 1 0 00.95-.69L9.05 2.927z" />
                                            </svg>
                                        ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
