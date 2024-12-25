import React, { useState } from "react";
import { X } from "lucide-react";
import emailjs from "emailjs-com";
import FormInput from "./forms/FormInput";

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cvvrmab",
        "template_2aexqzc",
        e.target as HTMLFormElement,
        "aTNZdhXhb5yq23IOb"
      )
      .then(
        (result) => {
          console.log("Email sent successfully", result.text);
          onClose();
        },
        (error) => {
          console.log("Error sending email", error.text);
        }
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-900">Get a Quote</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <FormInput
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
          <FormInput
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Your phone number"
          />

          <button
            type="submit"
            className="w-full bg-[#F17E00] text-white px-6 py-3 rounded-lg hover:bg-[#F16E00] transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
