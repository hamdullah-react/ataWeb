import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Contact Us - Mohammad Ghulam Security Solution (MGSS)",
  description:
    "Get in touch with MGSS - a leading provider of security solutions including security camera accessories such as cables, connectors, devices, poles, adapters, and power supplies. Contact Ghulam Haider, the General Manager, for any queries regarding our products or services.",
};

const Contactus = () => {
  const contactInfo = [
    {
      icon: "fa-envelope",
      label: "Email",
      value: "haider@mgssuae.com",
      href: "mailto:haider@mgssuae.com",
    },
    {
      icon: "fa-phone",
      label: "Phone",
      value: "+971 43 32 7424",
      href: "tel:+97143327424",
    },
    {
      icon: "fa-mobile",
      label: "Mobile",
      value: "+971 56 2071 106",
      href: "tel:+971562071106",
    },
    {
      icon: "fa-map-marker-alt",
      label: "Address",
      value:
        "Mustafa Mohd. Abdul Noor Bldg. Behind Citi stay premium Hotel Nakheel Road, Deira, Dubai - U.A.E.",
      href: null,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-8">
      <div className="container-fluid px-xl-5">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-green-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Contact Us</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 shadow-xl text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact Us
              </h1>
              <div className="w-20 h-1 bg-white mx-auto rounded-full mb-6"></div>
              <p className="text-lg md:text-xl text-green-50">
                We'd love to hear from you. Get in touch for any queries or
                support.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="row g-4 mb-12">
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form name="sentMessage" id="contactForm" noValidate>
                {/* Name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-green-500 focus:outline-none transition-all duration-300"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-green-500 focus:outline-none transition-all duration-300"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-green-500 focus:outline-none transition-all duration-300"
                    id="subject"
                    placeholder="Enter subject"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-green-500 focus:outline-none transition-all duration-300 resize-none"
                    rows={6}
                    id="message"
                    placeholder="Enter your message"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <i className="fa fa-paper-plane"></i>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 h-100">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Get In Touch
                </h2>
                <p className="text-gray-600">
                  Reach out to us through any of the following channels
                </p>
              </div>

              {/* General Manager */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 mb-6 border-l-4 border-green-600">
                <p className="text-sm text-gray-600 mb-1">General Manager</p>
                <h3 className="text-xl font-bold text-gray-800">
                  Ghulam Haider
                </h3>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i
                        className={`fa ${info.icon} text-green-600 text-lg`}
                      ></i>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-semibold text-gray-600 mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-800 hover:text-green-600 transition-colors no-underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-800">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="mt-6">
                <a
                  href="https://wa.me/971562071106"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 no-underline"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="row">
          <div className="col-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
              <div className="mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <i className="fa fa-map-marker-alt text-green-600"></i>
                  Our Location
                </h3>
              </div>
              <div className="rounded-xl overflow-hidden" style={{ height: "450px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.9332026577003!2d55.30652977538432!3d25.27283237766228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzIyLjIiTiA1NcKwMTgnMzIuOCJF!5e0!3m2!1sen!2s!4v1710309529056!5m2!1sen!2s"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
