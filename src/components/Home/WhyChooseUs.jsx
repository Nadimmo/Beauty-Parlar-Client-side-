import React from 'react';
import { FaUserTie, FaStar, FaSpa, FaDollarSign } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaUserTie className="text-4xl " />,
      title: 'Experienced Professionals',
      description: 'Our team consists of certified professionals with years of experience.',
    },
    {
      id: 2,
      icon: <FaStar className="text-4xl " />,
      title: 'Premium Products',
      description: 'We use only top-quality products to ensure the best results for our clients.',
    },
    {
      id: 3,
      icon: <FaSpa className="text-4xl " />,
      title: 'Relaxing Ambiance',
      description: 'Enjoy a serene and calming atmosphere while we pamper you.',
    },
    {
      id: 4,
      icon: <FaDollarSign className="text-4xl " />,
      title: 'Affordable Prices',
      description: 'Experience luxury at prices that won’t break the bank.',
    },
  ];

  return (
    <section className=" mt-28 mx-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Why <span className="text-[#F63E7B]">Choose Us?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:bg-[#F63E7B] hover:text-white transition duration-300"
            >
              <div className="mb-4 text-[#F63E7B] hover:text-white">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 hover:text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
