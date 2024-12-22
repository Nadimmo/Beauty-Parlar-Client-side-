import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer bg-[#F63E7B]  p-10 text-[#FFFFFF]">
      <aside>
        <img src="https://i.ibb.co.com/8gcSWbj/logo.png" className='w-22 h-10 text-black bg-white hover:cursor-pointer' alt="logo" />
        <p>
          H#000 (0th Floor), Road #00, <br />
          New DOHS, Mohakhali, Dhaka, Bangladesh

        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>

      <nav>
        <h6 className="footer-title">Quick Links</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Contact</a>
      </nav>

      <nav>
        <h6 className="footer-title">About Us</h6>
        <p className="text-sm w-64">
          ACME Industries is a global leader in innovative technology solutions, providing cutting-edge products and services.
        </p>
        <h6 className="footer-title">Follow Us</h6>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl text-white hover:text-blue-800" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl text-white hover:text-pink-800" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-xl text-white hover:text-red-800" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl text-white hover:text-blue-900" />
          </a>
        </div>
      </nav>
    </footer>
  );
};
