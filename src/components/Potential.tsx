import React from "react";
import { Users, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: Target,
    value: "98%",
    label: "Success Rate",
  },
];

export default function Potential() {
  return (
    <section className="py-20 bg-[#F17E00] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock The Potential Of Your Brand
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            We’ve empowered numerous healthcare providers to achieve their
            marketing goals with data-driven strategies and innovative solutions
            tailored to the medical industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white text-gray-800 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                alt="Success Story"
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-4">
                Success Story: TechStart
              </h3>
              <p className="text-gray-600 mb-6">
                "Working with Divine Swastik transformed our online presence.
                Our organic traffic increased by 200% and lead generation
                improved by 150% within just 6 months."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
                  alt="Client"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-gray-500">CEO, TechStart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
