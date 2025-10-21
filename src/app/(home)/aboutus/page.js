import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About MGSS - Your Trusted Security Solutions Provider",
  description:
    "Learn more about Mohammad Ghulam Security Solution (MGSS) - a leading provider of security solutions including security camera accessories such as cables, connectors, devices, poles, adapters, and power supplies. Discover our commitment to customer satisfaction, innovation, and excellence.",
};

const Aboutus = () => {
  const values = [
    {
      icon: "fa-shield-alt",
      title: "Quality First",
      description:
        "We offer only the best quality products at competitive prices, ensuring value for your investment.",
    },
    {
      icon: "fa-users",
      title: "Customer Focused",
      description:
        "Building long-term relationships through trust, loyalty, and exceptional customer service.",
    },
    {
      icon: "fa-lightbulb",
      title: "Innovation",
      description:
        "Continuously improving and expanding our product offerings to meet evolving security needs.",
    },
    {
      icon: "fa-check-circle",
      title: "Reliability",
      description:
        "Prioritizing safety and reliability in all solutions for complete peace of mind.",
    },
  ];

  const stats = [
    { number: "2018", label: "Established" },
    { number: "100%", label: "Customer Satisfaction" },
    { number: "42+", label: "Products" },
    { number: "5", label: "Categories" },
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
            <li className="text-gray-800 font-medium">About Us</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 shadow-xl text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About MGSS
              </h1>
              <div className="w-20 h-1 bg-white mx-auto rounded-full mb-6"></div>
              <p className="text-lg md:text-xl text-green-50">
                Your Trusted Security Solutions Provider Since 2018
              </p>
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="row mb-12">
          <div className="col-lg-10 mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa fa-building text-green-600 text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Mohammad Ghulam Security Solution
                  </h2>
                  <p className="text-gray-600">Founded in 2018 • Dubai, UAE</p>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  <strong>Mohammad Ghulam Security Solution (MGSS)</strong> was
                  founded in 2018 in Dubai, UAE. We specialize in providing
                  comprehensive security solutions including security camera
                  accessories such as cables, connectors, devices, poles,
                  adapters, and power supplies.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  At <strong>MGSS</strong>, our main goal is customer
                  satisfaction, offering the best quality products at
                  competitive prices. We believe in building long-term
                  relationships with our customers and value their trust and
                  loyalty.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Our commitment to innovation and excellence drives us to
                  continuously improve and expand our product offerings. We
                  prioritize safety and reliability in all our solutions,
                  ensuring peace of mind for our customers. As a
                  customer-centric company, we actively seek feedback and
                  suggestions to enhance our services and products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Our Core <span className="text-green-600">Values</span>
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="row g-4">
            {values.map((value, index) => (
              <div key={index} className="col-md-6 col-lg-3 mt-4">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-100 border border-gray-100 hover:border-green-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <i className={`fa ${value.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="row text-center">
              {stats.map((stat, index) => (
                <div key={index} className="col-6 col-md-3 mb-4 mb-md-0">
                  <div className="p-4">
                    <h3 className="text-4xl font-bold text-green-600 mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 text-white shadow-xl">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Secure Your Property?
                </h2>
                <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                  Get in touch with us today for expert advice and quality
                  security solutions tailored to your needs.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://wa.me/971562071106"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                    <span>WhatsApp Us</span>
                  </a>

                  <Link
                    href="/contactus"
                    className="inline-flex items-center gap-2 bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg no-underline"
                  >
                    <i className="fa fa-envelope"></i>
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
