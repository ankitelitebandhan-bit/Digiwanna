import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 md:px-16 lg:px-32 italic">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700 pb-8 mb-8">
        <h2 className="text-lg font-semibold mb-2">Stay Updated</h2>
        <p className="text-sm mb-4">
          Subscribe to our newsletter for the latest insights, tips, and updates
          from the world of digital innovation.
        </p>
        <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto md:w-1/2 px-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xl">
        {/* Digiwanna Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Digiwanna</h3>
          <p className="mb-4">
            We craft exceptional digital experiences that drive growth, engage
            audiences, and elevate your brand in the digital landscape.
          </p>
          <ul className="space-y-2 text-lg">
            <li>
              Email:{" "}
              <a
                href="mailto:hello@digitalcraft.com"
                className="text-gray-400 hover:underline"
              >
                Support@digiwanna.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+19591234567"
                className="text-gray-400 hover:underline"
              >
                +91 73039 45449
              </a>
            </li>
            <li>
              Location: A4, lower GF , Near Vardhman Mall , Nanda Enclave Sec 19
              Dwarka , South West Delhi:110075
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Ourwork" className="hover:underline">
                Our Work
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mobile Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Analytics & Insights
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                E-commerce Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Graphic Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Domain | Hosting | SSL
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                CRM Solutions
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/career" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Hire Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/Privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/TermsofServices" className="hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p className="mb-4 md:mb-0">
          © 2025 Digiwanna. Made with <span className="text-red-500">♥</span> in
          India.
        </p>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
