'use client'
import React from 'react'

export function Glossary() {
  const terms = [
    // Network and Security Technologies
    {
      term: "Active Directory (AD)",
      definition: "A Microsoft directory service that facilitates user and resource management in a network."
    },
    {
      term: "Group Policy",
      definition: "A feature in Active Directory to control user and computer environments in the network."
    },
    {
      term: "NAC (Network Access Control)",
      definition: "A security approach that restricts unauthorized devices from connecting to a network."
    },
    {
      term: "EDR (Endpoint Detection and Response)",
      definition: "A cybersecurity technology that monitors endpoint devices for potential security threats."
    },
    {
      term: "AAA (Authentication, Authorization, and Accounting)",
      definition: "A security framework for controlling and tracking user access to network resources."
    },
    {
      term: "Firewall",
      definition: "A security system that monitors and controls network traffic based on predetermined rules."
    },
    {
      term: "VPN (Virtual Private Network)",
      definition: "A secure communication protocol that provides encrypted connections over the internet."
    },
    {
      term: "802.1x",
      definition: "A network port-based authentication method that prevents unauthorized access to network resources."
    },
    {
      term: "Port Security",
      definition: "A network security feature that restricts input to an interface by learning or configuring MAC addresses."
    },
    // Protocols and Network Management
    {
      term: "TCP/IP",
      definition: "The foundational protocols for internet communication."
    },
    {
      term: "DNS (Domain Name System)",
      definition: "A protocol for translating domain names into IP addresses."
    },
    {
      term: "DHCP",
      definition: "A network management protocol used to automatically assign IP addresses and other network configuration parameters."
    },
    {
      term: "Load Balancing",
      definition: "A technique to distribute network traffic across multiple servers to ensure no single server becomes overwhelmed."
    },
    // Security and Forensics
    {
      term: "Authentication Protocols",
      definition: "Mechanisms to verify user or device identity within a network (e.g., Kerberos)."
    },
    {
      term: "Encryption",
      definition: "Techniques to secure data by converting it into a format accessible only by authorized parties."
    },
    {
      term: "Malware",
      definition: "Malicious software designed to harm or exploit devices and networks."
    },
    {
      term: "SIEM",
      definition: "A comprehensive approach to security management that combines system monitoring, event correlation, and incident response."
    },
    {
      term: "Network Snooping",
      definition: "A security technique used to monitor and analyze network traffic for potential security threats."
    },
    {
      term: "RAM Forensics",
      definition: "A digital forensic technique for analyzing computer memory to detect malicious activities or system breaches."
    },
    {
      term: "Volatility",
      definition: "An advanced memory forensics framework for incident response and malware analysis."
    },
    {
      term: "Penetration Testing",
      definition: "A method of evaluating computer and network security by simulating cyber attacks."
    },
    // Tools and Software
    {
      term: "Windows Server",
      definition: "A server operating system designed to manage IT environments effectively."
    },
    {
      term: "PowerShell",
      definition: "A task automation tool from Microsoft, used for scripting administrative tasks."
    },
    {
      term: "Python",
      definition: "A programming language used for automating repetitive tasks and creating scripts."
    },
    {
      term: "VirtualBox",
      definition: "A cross-platform virtualization software to run multiple operating systems simultaneously."
    },
    {
      term: "Cisco Packet Tracer",
      definition: "A simulation tool for learning network configuration and troubleshooting."
    },
    {
      term: "Wireshark",
      definition: "A popular network protocol analyzer for network troubleshooting and analysis."
    },
    {
      term: "Metasploit",
      definition: "An open-source penetration testing framework used for developing and executing exploit code."
    },
    {
      term: "Microsoft Deployment Toolkit (MDT)",
      definition: "A tool used for automating operating system deployment."
    },
    // Cloud Computing and Virtualization
    {
      term: "VPS (Virtual Private Server)",
      definition: "A virtualized server that mimics a dedicated server within a shared hosting environment."
    },
    {
      term: "IaaS (Infrastructure as a Service)",
      definition: "A cloud computing model providing virtualized computing resources over the internet."
    },
    {
      term: "PaaS (Platform as a Service)",
      definition: "A cloud computing model that provides a platform allowing customers to develop, run, and manage applications."
    },
    {
      term: "SaaS (Software as a Service)",
      definition: "A software distribution model where applications are hosted by a vendor and made available to customers over the internet."
    },
    {
      term: "Cloud Orchestration",
      definition: "The automated management of cloud computing services and infrastructure."
    },
    {
      term: "Containerization",
      definition: "A lightweight alternative to full machine virtualization that involves encapsulating an application in a container with its own operating environment."
    },
    {
      term: "Kubernetes",
      definition: "An open-source system for automating deployment, scaling, and management of containerized applications."
    },
    // Automation and Scripting
    {
      term: "Automation Scripting",
      definition: "Writing scripts to execute repetitive tasks with minimal manual intervention."
    },
    // Note: This glossary provides a comprehensive overview of technical terms encountered during the internship and from additional research resources.
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 dark:text-blue-100 font-serif text-center">
        Technical Glossary
      </h2>
      <div className="space-y-6">
        <div className="grid gap-4">
          {terms.map((item, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-4">
              <dt className="text-xl font-bold text-indigo-900 dark:text-indigo-300">{item.term}</dt>
              <dd className="mt-1 text-lg text-gray-900 dark:text-gray-100">{item.definition}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 