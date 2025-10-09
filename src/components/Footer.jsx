import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:flex md:justify-between">
          {/* Company Info */}
          <div className="md:w-1/4">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/images/SensGrid_logo.png"
                alt="SenseGrid Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Seamlessly integrate intelligence into your industrial operations
              with our cutting-edge IIoT solutions.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links + Support (grouped together) */}
          <div className="grid grid-cols-2 gap-20">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-gray-400 hover:text-white"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/use-cases"
                    className="text-gray-400 hover:text-white"
                  >
                    Use Cases
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-400 hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">info@sltdigitallab.lk</span>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="https://wa.me/94704752330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-green-500 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-green-500" />
                  <span>+94 70 475 2330</span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">
                  +94 (11) 243 0010, <br /> +94 (70) 475 2330
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">
                  PO Box 503, Lotus Rd, Colombo 01, Sri Lanka
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            {/* <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className="relative px-4 py-2 text-sm font-medium text-white rounded-r-lg overflow-hidden group">
                  
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500 
                   bg-[length:200%_100%] bg-[position:var(--x,0)_0] 
                   transition-all duration-500 group-hover:[--x:100%] rounded-r-lg"
                  ></span>

                  
                  <span className="relative z-10">Subscribe</span>
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SenseGrid by SLT Digital Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
