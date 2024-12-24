import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const OurTeam = () => {
  return (
    <section className="bg-pink-50 py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-8">Meet Our Team</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          At Jerin's Parlour, we are proud to have a team of skilled and passionate beauty professionals dedicated to making you look and feel your best.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://i.ibb.co.com/C29J8yW/first.jpg"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-pink-500 mb-2">Jerin Ahmed</h2>
            <p className="text-gray-600">Founder & Lead Stylist</p>
            <p className="text-gray-500 mt-2 text-sm">
              With over 10 years of experience, Jerin is an expert in beauty and hair care, dedicated to providing personalized services to every client.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
                <FaFacebook />
              </a>
              <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
                <FaTwitter />
              </a>
            </div>
            <p className="text-gray-500 italic mt-4">"Beauty is power; a smile is its sword."</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://i.ibb.co.com/VYsRKRm/second.jpg"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-pink-500 mb-2">Sadia Rahman</h2>
            <p className="text-gray-600">Senior Makeup Artist</p>
            <p className="text-gray-500 mt-2 text-sm">
              Sadia specializes in bridal and event makeup, ensuring every client looks stunning for their special occasions.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
                <FaFacebook />
              </a>
              <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
                <FaTwitter />
              </a>
            </div>
            <p className="text-gray-500 italic mt-4">"Makeup is art, beauty is spirit."</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://i.ibb.co.com/2gPDLxT/third.jpg"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-pink-500 mb-2">Nadia Hasan</h2>
            <p className="text-gray-600">Skincare Specialist</p>
            <p className="text-gray-500 mt-2 text-sm">
              Nadia is passionate about skincare and helps clients achieve radiant, healthy skin through tailored treatments.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
                <FaFacebook />
              </a>
              <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
                <FaTwitter />
              </a>
            </div>
            <p className="text-gray-500 italic mt-4">"Healthy skin is always in."</p>
          </div>
        </div>

        <p className="text-md md:text-lg text-gray-600 mt-12">
          Our team combines expertise and creativity to deliver exceptional beauty experiences. We look forward to serving you soon!
        </p>
      </div>
    </section>
  );
};

export default OurTeam;
