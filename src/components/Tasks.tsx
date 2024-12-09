import React from 'react'

export function Tasks() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 dark:text-blue-100 font-serif text-center">
        Tasks and Responsibilities
      </h2>
      <div className="space-y-6">
        <section className="space-y-3">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300">Weekly Activities</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed text-gray-900 dark:text-gray-100">
            <li>
              <strong className="text-blue-800 dark:text-blue-300 font-medium">Week 1:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Covered general concepts in systems and security, focusing on foundational principles of system administration and threat management.</li>
                <li>Explored key practices for securing IT infrastructures, such as understanding firewalls and access controls.</li>
                <li>Participated in discussions about balancing efficiency and security.</li>
                <li>Studied foundational principles of system administration and threat management.</li>
              </ul>
            </li>
            <li>
              <strong className="text-blue-800 dark:text-blue-300 font-medium">Week 2:</strong> Focused on Active Directory by conducting in-depth research on its functionalities and use cases.
            </li>
            <li>
              <strong className="text-blue-800 dark:text-blue-300 font-medium">Week 3:</strong> Installed Windows Server on a virtual machine using VirtualBox. Experimented with Active Directory, including basic user handling, group policies, and PowerShell scripting for administrative tasks.
            </li>
            <li>
              <strong className="text-blue-800 dark:text-blue-300 font-medium">Week 4:</strong> Researched VPN technologies and their implementation. Gained an understanding of secure network communication protocols.
            </li>
            <li>
              <strong className="text-blue-800 dark:text-blue-300 font-medium">Week 5:</strong> Explored Python automation necessities and concepts. Engaged in basic security and system architecture discussions to understand their practical applications.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-300">Key Projects</h3>
          <ul className="list-disc pl-5 space-y-2 text-lg leading-relaxed text-gray-900 dark:text-gray-100">
            <li>
              <strong className="text-blue-800 dark:text-blue-300 font-medium">Active Directory Simulation:</strong>
              <ul className="list-disc pl-5 mt-2">
                <li>Description: Simulated a basic Active Directory environment in VirtualBox.</li>
                <li>Challenges: Setting up the virtual environment presented difficulties, including compatibility issues with VirtualBox and configuring Windows Server roles.</li>
                <li>Solutions: Resolved setup challenges through online forums and guidance from my mentor.</li>
                <li>Outcome: Successfully created and managed an Active Directory simulation.</li>
                <li>Role: Configured and managed virtual servers, created user accounts, and applied group policies.</li>
                <li>Tools/Technologies: VirtualBox, Active Directory, Windows Server.</li>
              </ul>
            </li>
            <li>
              <strong className="text-blue-800 dark:text-blue-300 font-medium">Cybersecurity Research:</strong> Investigated common malware types and cybersecurity threats, preparing a comprehensive report on threat identification and mitigation strategies.
            </li>
            <li>
              <strong className="text-blue-800 dark:text-blue-300 font-medium">Networking Simulation:</strong> Designed and analyzed a small-scale network architecture using Cisco Packet Tracer, configuring basic routing and switching.
            </li>
            <li>
              <strong className="text-blue-800 dark:text-blue-300 font-medium">VPN Research:</strong> Researched VPN functionalities and their integration into network infrastructures, documenting findings and theoretical configurations for secure connectivity.
            </li>
            <li>
              <strong className="text-blue-800 dark:text-blue-300 font-medium">Python Automation:</strong> Learned and practiced basic Python scripting for automating routine system administration tasks.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

