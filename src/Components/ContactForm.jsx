import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_j8tcmua", // Replace with your EmailJS service ID
        "template_syl81bp", // Replace with your EmailJS template ID
        form.current,
        "5KgKM9WoGnbCM4eA5" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-white italic">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get In Touch</h2>

          <div className="flex items-start space-x-3">
            <FaEnvelope className="text-gray-600 mt-1" />
            <div>
              <p className="font-medium">Email Us</p>
              <a
                href="mailto:hello@digiwanna.com"
                className="text-sm text-gray-600"
              >
                hello@digiwanna.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FaPhoneAlt className="text-gray-600 mt-1" />
            <div>
              <p className="font-medium">Call Us</p>
              <p className="text-sm text-gray-600">+91 7303945449</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-gray-600 mt-1" />
            <div>
              <p className="font-medium">Visit Us</p>
              <p className="text-sm text-gray-600">
                Location: A4, lower GF , Near Vardhman Mall , Nanda Enclave Sec
                19 Dwarka , South West Delhi:110075
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FaClock className="text-gray-600 mt-1" />
            <div>
              <p className="font-medium">Response Time</p>
              <p className="text-sm text-gray-600">Within 24 hours</p>
            </div>
          </div>

          <div>
            <p className="font-medium mb-2">Follow Us</p>
            <div className="flex space-x-4 text-gray-600">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
          <p className="text-sm text-gray-500 mb-6">
            Fill out the form below and we’ll get back to you within 24 hours.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name *"
                required
                className="border px-4 py-2 rounded w-full"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address *"
                required
                className="border px-4 py-2 rounded w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="border px-4 py-2 rounded w-full"
              />
              <select
                name="service"
                required
                className="border px-4 py-2 rounded w-full text-gray-600"
              >
                <option value="">Service Interested In *</option>
                <option value="Web Design">Web Design</option>
                <option value="SEO">SEO</option>
                <option value="Branding">Branding</option>
                <option value="Development">Development</option>
              </select>
            </div>

            <select
              name="budget"
              required
              className="border px-4 py-2 rounded w-full text-gray-600"
            >
              <option value="">Project Budget *</option>
              <option value="Under $1,000">Under $1,000</option>
              <option value="$1,000 - $5,000">$1,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="Above $10,000">Above $10,000</option>
            </select>

            <textarea
              name="message"
              placeholder="Project Description *"
              required
              className="border px-4 py-2 rounded w-full h-32"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full md:w-auto px-6 py-3 rounded-md text-white font-medium transition ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black hover:bg-gray-800"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-green-600 text-sm mt-2">
                Message sent successfully! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
