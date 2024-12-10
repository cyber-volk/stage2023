'use client'

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import Image from 'next/image';
import { X } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  images?: Array<{
    path: string;
    description: string;
  }>;
}

interface Workflow {
  name: string;
  description: string;
  steps: string[];
}

const defaultProjects: Project[] = [
  {
    name: "Active Directory Implementation",
    description: "Set up and configured Active Directory in a virtualized environment using Windows Server 2019. This project involved creating and managing users, groups, and implementing group policies.",
    technologies: ["Windows Server 2019", "VirtualBox", "PowerShell", "Active Directory"],
    images: [
      { path: "/images/1_project planning.png", description: "Project Planning" },
      { path: "/images/2_first NIC config.png", description: "First Network Interface Configuration" },
      { path: "/images/3_second NIC config.png", description: "Second Network Interface Configuration" },
      { path: "/images/4_windows server 2019 default admin config.png", description: "Windows Server 2019 Default Admin Configuration" },
      { path: "/images/5_installing VM guest addition for better experience.png", description: "Installing VM Guest Additions" },
      { path: "/images/6_internal NIC ip assignment.png", description: "Internal Network Interface IP Assignment" },
      { path: "/images/7_installing AD domain services.png", description: "Installing Active Directory Domain Services" },
      { path: "/images/8_promote the computer to a domain.png", description: "Promoting Computer to Domain" },
      { path: "/images/9_add organizational unit for the dedicated admin account.png", description: "Adding Organizational Unit for Admin Account" },
      { path: "/images/10_add a new admin user.png", description: "Adding a New Admin User" },
      { path: "/images/11_make the new user an admin and add it to the admins group.png", description: "Making New User an Admin" },
      { path: "/images/12_installing RAS role Remote Access Services.png", description: "Installing Remote Access Services" },
      { path: "/images/13_finish RAS installation by choosing the NIC used to connect to the internet.png", description: "Configuring Network Interface for RAS" },
      { path: "/images/14_installing DHCP.png", description: "Installing DHCP Service" },
      { path: "/images/15_setting up dhcp scope.png", description: "Setting Up DHCP Scope" },
      { path: "/images/16_selecting the domain controler as a default gateway.png", description: "Selecting Domain Controller as Default Gateway" },
      { path: "/images/17_setting up the powershell's exuction policy to unrestrictedd before running the users ceartion script.png", description: "Configuring PowerShell Execution Policy" },
      { path: "/images/18_running the powershell user creation script.png", description: "Running PowerShell User Creation Script" }
    ]
  },
  {
    name: "Network Security Analysis",
    description: "Conducted security assessments and implemented security measures",
    technologies: ["Wireshark", "Security Protocols", "Network Analysis"]
  }
];

const defaultWorkflows: Workflow[] = [
  {
    name: "System Monitoring",
    description: "Daily system health check and maintenance workflow",
    steps: [
      "Check system logs for errors",
      "Monitor resource usage",
      "Verify backup completion",
      "Update documentation"
    ]
  },
  {
    name: "User Management",
    description: "Process for handling user account requests and modifications",
    steps: [
      "Receive and validate request",
      "Create/modify user account",
      "Set appropriate permissions",
      "Send confirmation"
    ]
  }
];

export function ProjectsWorkflows() {
  const [selectedImage, setSelectedImage] = useState<{path: string, description: string} | null>(null);

  const projectsData = defaultProjects;
  const workflowsData = defaultWorkflows;

  const openImageModal = (image: {path: string, description: string}) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="space-y-8 py-8 px-4 sm:px-6 lg:px-8 max-w-full">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-950 dark:text-blue-100 font-serif">
        Projects & Workflows
      </h2>

      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="workflows">Workflows</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-1">
            {projectsData.map((project: Project, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-blue-900 dark:text-blue-100">
                    {project.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Image Gallery */}
                  {project.images && project.images.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold mb-4 text-blue-900 dark:text-blue-100">
                        Project Implementation Gallery
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {project.images.map((image, imageIndex) => (
                          <div 
                            key={imageIndex} 
                            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                            onClick={() => openImageModal(image)}
                          >
                            <Image 
                              src={image.path} 
                              alt={`Step ${imageIndex + 1}: ${image.description}`} 
                              width={300} 
                              height={200} 
                              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                              <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 text-sm">
                                Step {imageIndex + 1}: {image.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="workflows" className="space-y-6">
          <div className="grid gap-6">
            {workflowsData.map((workflow: Workflow, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-blue-900 dark:text-blue-100">
                    {workflow.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {workflow.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      Steps:
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      {workflow.steps.map((step: string, stepIndex: number) => (
                        <li key={stepIndex} className="pl-2">{step}</li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeImageModal}
        >
          <div 
            className="relative max-w-[90%] max-h-[90%] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 z-60 bg-white/50 rounded-full p-2 hover:bg-white/75 transition-all"
              onClick={closeImageModal}
            >
              <X className="w-6 h-6 text-black" />
            </button>
            <Image 
              src={selectedImage.path} 
              alt={selectedImage.description}
              width={1200} 
              height={800} 
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}