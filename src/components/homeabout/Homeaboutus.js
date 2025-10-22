import React from "react";

const Homeaboutus = () => {
  const features = [
    {
      icon: "fa-shield-alt",
      title: "Quality Products",
      description: "Best quality security solutions at competitive prices",
    },
    {
      icon: "fa-users",
      title: "Customer Focus",
      description: "Building long-term relationships with our valued customers",
    },
    {
      icon: "fa-lightbulb",
      title: "Innovation",
      description: "Continuously improving and expanding our product offerings",
    },
    {
      icon: "fa-check-circle",
      title: "Reliability",
      description: "Safety and reliability ensuring peace of mind",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white py-6 mt-4">
        <div className="w-full px-4 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              About <span className="text-green-600">MGSS</span>
            </h2>
            <div className="w-12 h-0.5 bg-green-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Card */}
          <div className="flex justify-center mb-5">
            <div className="w-full lg:w-10/12">
              <div className="bg-white rounded-xl shadow-md p-4 md:p-5 border border-gray-100">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fa fa-building text-green-600 text-base"></i>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-800">Mohammad Ghulam Security Solution</h3>
                    <p className="text-xs text-gray-600">Founded in 2018 • Dubai, UAE</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed text-justify md:text-center">
                  We specialize in providing comprehensive security solutions including security camera accessories
                  such as cables, connectors, devices, poles, adapters, and power supplies. At MGSS, our main
                  goal is customer satisfaction, offering the best quality products at competitive prices.
                  As a customer-centric company, we actively seek feedback and suggestions to enhance our
                  services and products.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 border border-gray-100 hover:border-green-200">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-2.5 shadow-sm">
                    <i className={`fa ${feature.icon} text-white text-base`}></i>
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-gray-800 mb-1.5">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="flex justify-center mt-5">
            <div className="w-full lg:w-10/12">
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-4 md:p-5 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-white">
                  <div className="py-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-0.5">2018</h3>
                    <p className="text-xs text-green-100">Established</p>
                  </div>
                  <div className="py-2 md:border-l md:border-r border-green-400">
                    <h3 className="text-2xl md:text-3xl font-bold mb-0.5">100%</h3>
                    <p className="text-xs text-green-100">Customer Satisfaction</p>
                  </div>
                  <div className="py-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-0.5">Dubai</h3>
                    <p className="text-xs text-green-100">UAE Based</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeaboutus;
