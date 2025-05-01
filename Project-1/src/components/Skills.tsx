import React from 'react';
import { Cloud, Database, Server, Code, Lock, ChevronRight, Cpu, Globe, Shield, Cog } from 'lucide-react';
import SkillCircle from './SkillCircle';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML5', percentage: 95 },
    { name: 'CSS3', percentage: 85 },
    { name: 'JavaScript', percentage: 65 },
    { name: 'Python', percentage: 85 },
    { name: 'Docker', percentage: 70 },
    { name: 'Kubernetes', percentage: 40 },
    { name: 'Terraform', percentage: 30 },
    { name: 'Jenkins', percentage: 40 },
  ];

  const awsServices = [
    { 
      name: 'Amazon EC2', 
      icon: <Server className="text-white" size={24} />,
      description: 'Virtual servers in the cloud',
      proficiency: 'Expert',
      features: ['Auto Scaling', 'Load Balancing', 'Instance Management']
    },
    { 
      name: 'Amazon S3', 
      icon: <Database className="text-white" size={24} />,
      description: 'Object storage built to store and retrieve data',
      proficiency: 'Expert',
      features: ['Lifecycle Policies', 'Versioning', 'Cross-Region Replication']
    },
    { 
      name: 'AWS Lambda', 
      icon: <Code className="text-white" size={24} />,
      description: 'Run code without thinking about servers',
      proficiency: 'Advanced',
      features: ['Event-Driven', 'Pay-per-Use', 'Multi-Runtime Support']
    },
    { 
      name: 'Amazon RDS', 
      icon: <Database className="text-white" size={24} />,
      description: 'Managed relational database service',
      proficiency: 'Intermediate',
      features: ['Automated Backups', 'Multi-AZ', 'Read Replicas']
    },
    { 
      name: 'AWS IAM', 
      icon: <Lock className="text-white" size={24} />,
      description: 'Identity and access management',
      proficiency: 'Expert',
      features: ['Role-Based Access', 'Policy Management', 'Security Best Practices']
    },
    {
      name: 'AWS VPC',
      icon: <Globe className="text-white" size={24} />,
      description: 'Virtual Private Cloud networking',
      proficiency: 'Intermediate',
      features: ['Subnet Design', 'Security Groups', 'Network ACLs']
    },
    {
      name: 'AWS ECS',
      icon: <Cpu className="text-white" size={24} />,
      description: 'Elastic Container Service',
      proficiency: 'Intermediate',
      features: ['Container Orchestration', 'Task Definitions', 'Service Auto Scaling']
    },
    
  ];

  const devOpsTools = [
    {
      name: 'CI/CD Pipeline',
      icon: <Cog className="text-white" size={24} />,
      description: 'Continuous Integration and Deployment',
      proficiency: 'Expert',
      tools: ['Jenkins', 'GitHub Actions']
    },
    {
      name: 'Infrastructure as Code',
      icon: <Code className="text-white" size={24} />,
      description: 'Infrastructure automation',
      proficiency: 'Advanced',
      tools: ['Terraform', 'Ansible']
    },
    {
      name: 'Containerization',
      icon: <Cpu className="text-white" size={24} />,
      description: 'Container technologies',
      proficiency: 'Expert',
      tools: ['Docker', 'Kubernetes', 'ECS']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <SkillCircle percentage={skill.percentage} />
                <h4 className="text-lg font-medium mt-4">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">AWS Cloud Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awsServices.map((service) => (
              <div 
                key={service.name} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center mr-3">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-semibold">{service.name}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <ChevronRight size={16} className="text-indigo-600 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      service.proficiency === 'Expert' 
                        ? 'bg-green-100 text-green-800' 
                        : service.proficiency === 'Advanced'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {service.proficiency}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">DevOps Toolchain</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {devOpsTools.map((tool) => (
              <div 
                key={tool.name} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center mr-3">
                      {tool.icon}
                    </div>
                    <h4 className="text-lg font-semibold">{tool.name}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tool.tools.map((item, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;