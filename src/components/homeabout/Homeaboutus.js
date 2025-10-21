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
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 mt-8">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              About <span className="text-green-600">MGSS</span>
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Card */}
          <div className="row justify-center mb-10">
            <div className="col-lg-10">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="fa fa-building text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Mohammad Ghulam Security Solution</h3>
                    <p className="text-sm text-gray-600">Founded in 2018 • Dubai, UAE</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-justify md:text-center">
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
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3 mt-4">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 h-100 border border-gray-100 hover:border-green-200">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-3 shadow-md">
                      <i className={`fa ${feature.icon} text-white text-xl`}></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="row mt-10">
            <div className="col-lg-10 mx-auto">
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 shadow-xl">
                <div className="row text-center text-white">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <div className="py-2">
                      <h3 className="text-3xl font-bold mb-1">2018</h3>
                      <p className="text-sm text-green-100">Established</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0 border-md-start border-md-end border-green-400">
                    <div className="py-2">
                      <h3 className="text-3xl font-bold mb-1">100%</h3>
                      <p className="text-sm text-green-100">Customer Satisfaction</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="py-2">
                      <h3 className="text-3xl font-bold mb-1">Dubai</h3>
                      <p className="text-sm text-green-100">UAE Based</p>
                    </div>
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
