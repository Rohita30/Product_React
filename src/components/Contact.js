import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1212/contact/addContact", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 text-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-4 font-serif">Contact</h1>
      <div className="text-lg text-gray-700 mb-4">
        <p className="mb-6">You can contact us using the following methods:</p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-bold">Phone:</span>
            <span>815-996-0890</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-bold">Email:</span>
            <span>rohitap938@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-bold">Address:</span>
            <span>123 Nimpura, Kharagpur, WB, India</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-bold">Social Media:</span>
            <ul className="list-disc pl-8">
              <li>Instagram: @rohita</li>
              <li>Facebook: @Rohita</li>
              <li>LinkedIn: @Rohitap</li>
            </ul>
          </div>
        </div>
        <p className="mt-8">
          You can also reach out to us by filling out the contact form below:
        </p>
        <form className="max-w-md mx-auto mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${
              isSubmitted ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitted}
          >
            {isSubmitted ? "Submitted" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;


