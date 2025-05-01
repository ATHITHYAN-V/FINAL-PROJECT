import React from 'react';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-2xl font-bold mb-4">Athithyan V</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Cloud & DevOps engineer specializing in AWS and modern cloud infrastructure solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/ATHITHYAN-V" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/_athithya.n/?next=&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/athithyan-v" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Namakkal, Tamil Nadu, India</li>
              <li className="text-gray-400">athithyanv402@gmail.com</li>
              <li className="text-gray-400">+91 7695860402</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} Athithyan V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;