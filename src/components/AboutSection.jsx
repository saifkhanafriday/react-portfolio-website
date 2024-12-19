import React from 'react';
import { motion } from 'framer-motion';
import Profile from '../assets/my-profile.jpg';
import { useInView } from 'react-intersection-observer'; // Import from react-intersection-observer

function AboutSection() {
  // Set up IntersectionObserver hook to detect when section is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation will trigger every time the section comes in and out of view
    threshold: 0.3, // Trigger the animation when 30% of the section is in view
  });

  return (
    <section id="about" className="py-28" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl font-extrabold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }} // Trigger opacity change when in view
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }} // Trigger opacity change when in view
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hello! I'm Saif Afridi, a passionate web developer with a love for creating beautiful, functional websites.
          </motion.p>
        </div>

        {/* About Me Content */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Left Section: Image */}
          <motion.div
            className="flex justify-center md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={Profile} // Replace with your actual photo
              alt="Saif Afridi"
              className="rounded-lg w-96 h-96 object-cover shadow-2xl border-4 border-gray-200"
            />
          </motion.div>

          {/* Right Section: Description */}
          <motion.div
            className="md:w-1/2 text-gray-800"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-3xl font-semibold">Who I Am</h3>
            <p className="mt-4 text-lg text-gray-600">
              I'm a web developer specializing in front-end development. I love turning complex problems into elegant, intuitive, and efficient solutions. With experience in **React**, **Vite**, **Tailwind CSS**, and other modern web technologies, I build responsive, fast, and accessible web applications.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, working on side projects, or learning new design principles. I enjoy building websites that not only work well but also provide an engaging user experience.
            </p>

            {/* Skills Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold">Skills</h3>
              <motion.ul
                className="mt-4 flex space-x-8 justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }} // Trigger opacity change when in view
                transition={{ duration: 1, delay: 0.7 }}
              >
                <li className="flex items-center text-gray-800">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="w-12 h-12 mr-2" />
                  React
                </li>
                <li className="flex items-center text-gray-800">
                  <img src="https://vitejs.dev/logo.svg" alt="Vite" className="w-12 h-12 mr-2" />
                  Vite
                </li>
                <li className="flex items-center text-gray-800">
                  <img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="Tailwind CSS" className="w-12 h-12 mr-2" />
                  Tailwind CSS
                </li>
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
