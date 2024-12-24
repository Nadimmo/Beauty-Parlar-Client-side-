import React, { useState } from 'react';
import useAxiosPublic from './../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import Rating from 'react-rating'; // Import the React Rating library
import { FaStar, FaRegStar } from 'react-icons/fa'; // Icons for rating

const Review = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    message: '',
    rating: 0, // New field for the rating
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review Submitted:', formData);

    // Simulate sending data to the database
    axiosPublic.post('/reviews', formData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: 'Review submitted successfully!',
            text: 'Thank you for your feedback.',
            icon: 'success',
          });
          setFormData({ name: '', designation: '', message: '', rating: 0 });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
        });
      });
  };

  return (
    <div className="min-h-screen flex justify-start items-start lg:justify-center lg:items-center bg-gray-100 lg:py-10 lg:px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 lg:max-w-md lg:w-full">
        <h2 className="lg:text-2xl font-bold text-center text-gray-800 mb-6">
          Submit Your Review
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F63E7B] focus:outline-none"
              required
            />
          </div>

          {/* Designation Field */}
          <div className="mb-4">
            <label
              htmlFor="designation"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Enter your designation"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F63E7B] focus:outline-none"
              required
            />
          </div>

          {/* Rating Field */}
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Rating
            </label>
            <Rating
              emptySymbol={<FaRegStar className="text-gray-400 text-xl" />}
              fullSymbol={<FaStar className="text-[#F63E7B] text-xl" />}
              initialRating={formData.rating}
              onChange={handleRatingChange}
              className="flex justify-start"
            />
          </div>

          {/* Review Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Review Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your review here..."
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 focus:ring focus:ring-[#F63E7B] focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="lg:w-full bg-[#F63E7B] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#e22d6c] transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
