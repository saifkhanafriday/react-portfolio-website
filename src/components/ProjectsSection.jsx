import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // Sample project data
  const projects = [
    {
      title: 'Project 1 - React + Vite Web App',
      description: 'A modern web app built with React and Vite for optimal performance and fast load times.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#', // Replace with actual project URL
    },
    {
      title: 'Project 2 - Portfolio Website',
      description: 'A responsive, minimalistic portfolio website to showcase my work and skills built with React and Tailwind CSS.',
      image: 'https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#', // Replace with actual project URL
    },
    {
      title: 'Project 3 - Task Management App',
      description: 'A task management app built with React and Firebase, designed to help users track their to-dos.',
      image: 'https://images.pexels.com/photos/1181306/pexels-photo-1181306.jpeg',
      link: '#', // Replace with actual project URL
    },
    {
      title: 'Project 4 - E-Commerce Website',
      description: 'A fully functional e-commerce website built with React, Tailwind CSS, and integrated with a payment gateway.',
      image: 'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#', // Replace with actual project URL
    },
    {
      title: 'Project 5 - Blog App',
      description: 'A simple blog app built with React and Markdown for writing and reading blog posts.',
      image: 'https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#', // Replace with actual project URL
    },
  ];
  
  
  return (
    <section id="projects" className="py-28 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl font-extrabold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Here are some of the projects I've worked on. Click on the project titles to explore more.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold mt-4 text-gray-800">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
