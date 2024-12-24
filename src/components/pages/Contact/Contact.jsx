import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-pink-50 py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 text-center mb-8">Get in Touch with Jerin's Parlour</h1>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-12">
          We are here to assist you with all your beauty needs. Feel free to reach out to us with any questions or to book an appointment.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Your Full Name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Your Email Address"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="text"
                  id="phone"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Your Phone Number"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-pink-600"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Expert beauty professionals with years of experience.</li>
              <li>High-quality products for all treatments.</li>
              <li>Personalized services tailored to your needs.</li>
              <li>Relaxing and welcoming environment.</li>
              <li>Competitive pricing without compromising on quality.</li>
            </ul>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-pink-500 mb-4">Connect with Us</h2>
              <div className="flex space-x-4">
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
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-pink-500 mb-4">Benefits of Our Team</h2>
              <p className="text-gray-700">
                Our dedicated team ensures you receive the best beauty care. We focus on understanding your needs and delivering results that exceed your expectations. Enjoy a stress-free experience with our friendly professionals.
              </p>
              <p className="text-gray-700 mt-4">Thinking about quitting or have concerns? Talk to our team—we are here to support you and find the best solution for your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
