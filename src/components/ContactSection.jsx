import React, { useRef, useState } from 'react';

function ContactSection() {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch("https://formspree.io/f/xwpkgkwg", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          form.reset(); // Reset the form
          setIsSubmitted(true); // Show success message
          setTimeout(() => setIsSubmitted(false), 5000); // Hide success message after 5 seconds
        } else {
          alert("Failed to send message, please try again later.");
        }
      })
      .catch(() => {
        alert("Failed to send message, please try again later.");
      });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Me</h2>
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-800">Get In Touch</h3>
          <p className="text-gray-600 mt-4">
            I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to send me a message.
          </p>
          <div className="mt-6">
            <p className="text-gray-800 font-semibold">Email:</p>
            <p className="text-gray-600">your-email@example.com</p>
            <p className="mt-4 text-gray-800 font-semibold">Social Links:</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub"
                  className="w-6 h-6"
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg"
        >
          {isSubmitted && (
            <p className="text-green-600 text-center mb-4">
              Message sent successfully!
            </p>
          )}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
