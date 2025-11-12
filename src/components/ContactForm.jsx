import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Add timestamp
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Colombo",
    });

    const dataToSend = {
      ...formData,
      time: timestamp,
    };

    emailjs
      .send(
        "service_3qinpy2",
        "template_1g1abzi",
        dataToSend,
        "n4xhyVWHvQSMbrGgH"
      )
      .then(
        () => {
          setIsSubmitted(true);
          setIsLoading(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email sending error:", error);
          setIsLoading(false);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-2"
    >
      <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Fill Out the Form to Connect Us
        </h2>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Thank you for reaching out. We'll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["name", "email", "company", "phone"].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    required={field === "name" || field === "email"}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                               bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full md:w-auto px-8 py-3 text-white font-semibold rounded-lg overflow-hidden group"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500 
                 bg-[length:200%_100%] bg-[position:var(--x,0)_0] 
                 transition-all duration-500 group-hover:[--x:100%] rounded-lg"
              ></span>
              <span className="relative">
                {isLoading ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
