import React from 'react';
import { Download, Instagram, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, <br />
              I'm <span className="text-indigo-600">Athithyan</span><br />
              Cloud & DevOps Engineer
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Specializing in AWS and modern cloud infrastructure
            </p>

            <a 
  href="/ATHITHYAN-V-Resume.pdf" 
  download 
  className="inline-flex items-center bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
>
  <Download size={18} className="mr-2" />
  Download Resume
</a>


            <div className="flex items-center mt-8 space-x-4">
              <a 
                href="https://www.instagram.com/_athithya.n/?next=&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-pink-600" />
              </a>
              <a 
                href="https://www.linkedin.com/in/athithyan-v-278635273" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-blue-600" />
              </a>
              <a 
                href="https://github.com/ATHITHYAN-V" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-800" />
              </a>
              <a 
                href="https://www.credly.com/users/athithyan-v" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                aria-label="Credly"
              >
                <span className="text-yellow-500 font-bold text-xs">Credly</span>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end mr-[300px]">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-indigo-200 shadow-xl">
              <img 
                src="src\img\about.jpg" 
                alt="Athithyan V" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;