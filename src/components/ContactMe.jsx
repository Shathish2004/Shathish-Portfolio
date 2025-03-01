import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../assets/css/contactMe.css";

const ContactMe = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("https://portfolio-contact-backend.up.railway.app/contact", formData);

      if (response.status === 200) {
        setResponseMessage(response.data.message);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setResponseMessage(error.response?.data?.message || "Failed to send message. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-auto pt-5 mx-auto md:w-[60%] lg:w-[40%] flex flex-col items-center mt-10 border-1 border-black dark:border-white rounded-sm p-5">
      <h2 className="text-3xl font-bold mb-4 text-center text-black dark:text-white">Let&apos;s Connect</h2>
      {responseMessage && (
        <p className={`text-center pb-3 ${responseMessage.includes("Failed") ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}>
          {responseMessage}
        </p>
      )}

      <form onSubmit={handleSubmit} className="w-full max-w-[600px] flex flex-col font-mono items-center gap-y-5">
        <input
          className="w-full h-12 p-2 border-1 input-shadow text-black dark:text-white border-black dark:border-white"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full h-12 p-2 border-1 input-shadow text-black dark:text-white border-black dark:border-white"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full h-40 p-2 border-1 input-shadow text-black dark:text-white border-black dark:border-white"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          className="w-full max-w-[200px] text-black dark:text-white hover:bg-blue-600 hover:text-white h-12 p-2 border-1 input-shadow border-black dark:border-white cursor-pointer transition-all duration-300"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      <p className="mt-5 text-lg text-center text-gray-600 dark:text-gray-300">
        You can <a href="mailto:satheesh12072004@gmail.com" className="font-semibold cursor-pointer underline text-blue-500">directly email me</a> by clicking the email in the footer (bottom).  <br />
        <span className="text-red-400 font-medium">Note:</span> The backend server might take a few seconds to respond if it&apos;s been inactive due to free-tier hosting limits. Thanks for your patience!
      </p>


    </div>
  );
};

export default ContactMe;
