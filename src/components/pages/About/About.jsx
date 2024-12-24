import React from 'react';

const About = () => {
  return (
    <section className="bg-pink-100 py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">Welcome to Jerin's Parlour</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          At Jerin's Parlour, we believe every woman deserves to feel radiant, confident, and beautiful. Our mission is to
          provide a sanctuary where you can relax, rejuvenate, and embrace your natural beauty.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-pink-500 mb-2">Our Services</h2>
            <p className="text-gray-600">
              From professional makeup artistry to luxurious hair treatments and relaxing facials, Jerin's Parlour offers a
              wide range of beauty services tailored to your unique needs. Let us pamper you.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-pink-500 mb-2">Why Choose Us?</h2>
            <p className="text-gray-600">
              Our team of experienced beauty professionals is dedicated to using high-quality products and techniques to
              ensure you leave our parlour glowing and satisfied. Your happiness is our priority.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <img
            src="https://i.ibb.co.com/zFHC2nM/engin-akyurt-g-m8-EDc4-X6-Q-unsplash-1.png"
            alt="Jerin's Parlour Interior"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>

        <p className="text-md md:text-lg text-gray-600 mt-8">
          Located in the heart of the city, Jerin's Parlour invites you to step into a world of beauty and relaxation.
          Discover the difference today and let us make your beauty shine brighter than ever before.
        </p>

        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Beauty Tips</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Stay hydrated to keep your skin glowing and healthy.</li>
            <li>Use sunscreen daily to protect your skin from harmful UV rays.</li>
            <li>Follow a consistent skincare routine with cleansing, toning, and moisturizing.</li>
            <li>Trim your hair regularly to avoid split ends and promote healthy growth.</li>
            <li>Use a silk pillowcase to reduce hair breakage and maintain smooth skin.</li>
            <li>Include a balanced diet with vitamins and minerals for better hair and skin health.</li>
            <li>Avoid over-styling your hair with heat tools to prevent damage.</li>
            <li>Exfoliate your skin once a week to remove dead cells and improve texture.</li>
            <li>Massage your scalp regularly to stimulate hair growth and improve blood circulation.</li>
            <li>Get enough sleep to let your body and skin rejuvenate overnight.</li>
          </ul>
        </div>

        <a
          href="#contact"
          className="inline-block bg-pink-500 text-white py-3 px-6 rounded-lg text-lg mt-8 hover:bg-pink-600"
        >
          Book Your Appointment
        </a>
      </div>
    </section>
  );
};

export default About;
