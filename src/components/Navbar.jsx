import React, { useState, useEffect } from "react";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled ? "bg-white shadow-lg py-1 text-purple-600" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div
          className={`text-2xl font-bold ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          MyPortfolio
        </div>

        {/* Menu */}
        <ul
          className={`flex space-x-12 text-lg ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {/* Home Link */}
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-purple-600 cursor-pointer"
            >
              Home
            </Link>
          </li>

          {/* About Link */}
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-purple-600 cursor-pointer"
            >
              About
            </Link>
          </li>

          {/* Projects Link */}
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-purple-600 cursor-pointer"
            >
              Projects
            </Link>
          </li>

          {/* Contact Link */}
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-purple-600 cursor-pointer"
            >
              Contact
            </Link>
          </li>

          {/* Download CV Link */}
          <li>
            <a
              href="https://workspace.google.com/products/drive/"
              target="_blank"
            
              className={`flex items-center px-4 py-2 text-sm rounded-lg shadow transition ${
                scrolled
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-white text-purple-600 hover:bg-gray-100"
              } cursor-pointer`}
            >
              <DocumentArrowDownIcon className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
