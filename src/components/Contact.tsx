import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cvvrmab", 
        "template_2aexqzc",
        e.target,
        "aTNZdhXhb5yq23IOb"
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result.text);
          alert("Your message has been sent!");
        },
        (error) => {
          console.log("Email sending error", error.text);
          alert("There was an issue sending your message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your digital presence? Contact us today for a
            free consultation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form
              onSubmit={sendEmail}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button className="w-full bg-[#F17E00] text-white px-6 py-3 rounded-lg hover:bg-[#F16E00] transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Phone className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+91 7030606476</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Mail className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">divineswastik11.in@gmail.com</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Clock className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Hours</h3>
                <p className="text-gray-600">Anytime</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <MapPin className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Aundh sanewadi lane nom3, Pune</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
