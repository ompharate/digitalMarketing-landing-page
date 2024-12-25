import React from "react";

export default function Hero() {
  return (
    <div className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Transforming Healthcare Marketing
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Specializing in digital marketing for the healthcare industry, we
              provide tailored strategies to boost your online presence, connect
              with patients, and grow your practice. Let us help you build trust
              and drive results with our expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact"  className="bg-[#F17E00] text-white px-8 py-3 rounded-full hover:bg-[#F16E00] transition-colors">
                Get Started
              </a>
              {/* <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-[#F17E00]-50 transition-colors">
                View Our Work
              </button> */}
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="Digital Marketing Team"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
