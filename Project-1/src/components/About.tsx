import React from 'react';
import { Server, Cloud, Code, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="w-full md:w-4/5 h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="src\img\about.jpg" 
                  alt="Athithyan V" 
                  className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-lg ml-20"
                />
              </div>
              
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">I'm Athithyan V</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hello! I'm a passionate Cloud & DevOps Engineer with experience in designing modern, 
              scalable, and secure cloud solutions. I specialize in AWS and cloud infrastructure to 
              enhance performance and reliability.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Server className="text-indigo-600 mr-2" size={20} />
                <span className="text-gray-700">Cloud Infrastructure</span>
              </div>
              <div className="flex items-center">
                <Cloud className="text-indigo-600 mr-2" size={20} />
                <span className="text-gray-700">AWS Solutions</span>
              </div>
              <div className="flex items-center">
                <Code className="text-indigo-600 mr-2" size={20} />
                <span className="text-gray-700">DevOps Practices</span>
              </div>
              <div className="flex items-center">
                <Cpu className="text-indigo-600 mr-2" size={20} />
                <span className="text-gray-700">Automation</span>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;