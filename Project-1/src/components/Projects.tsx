import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AWS Cloud Cost Optimization - Identifying Stale Resources',
      description: 'Automated solution to identify and manage unused AWS resources, reducing monthly costs by up to 30%.',
      image: 'src/img/cost-opt.jpg' ,
      technologies: ['AWS Lambda', 'CloudWatch', 'Python', 'SNS'],
      link: 'https://github.com/ATHITHYAN-V/Cost-Optimization-using-lambda.git'
    },
    {
      title: 'S3 File Upload with SNS Notification',
      description: 'Event-driven architecture that triggers notifications when files are uploaded to S3 buckets.',
      image: 'src/img/s3-notify-img.jpg',
      technologies: ['Amazon S3', 'AWS SNS', 'AWS Lambda', 'CloudFormation'],
      link: 'https://github.com/ATHITHYAN-V/s3-file-upload-project.git'
    },
    {
      title: 'Personal Portfolio Website with Automated Deployment using GitHub Actions',
      description: 'A responsive portfolio website with automated deployment using GitHub Actions, hosted on Amazon S3.',
      image: 'src/img/github-action-img.png',
      technologies: ['Amazon S3', 'GitHub Actions', 'HTML', 'CSS','JavaScript'],
      link: 'https://github.com/ATHITHYAN-V/portfolio-staticweb-with-githubaction.git'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-95 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;