import { useState, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";
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
      await emailjs.send(
        "service_blq2tcm",
        "template_s1hqcgk",
        {
          title: "New Portfolio Message Received",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "yov2TlFE5U8pYuSRL"
      );

      setResponseMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("Failed to send message. Try again later.");
      console.error("Error sending email:", error);
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
    </div>
  );
};

export default ContactMe;