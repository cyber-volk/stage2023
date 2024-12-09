'use client'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface Skill {
  name: string;
  description: string;
}

const technicalSkills: Skill[] = [
  { name: "System Administration", description: "Active Directory management, group policy configuration, and PowerShell scripting." },
  { name: "Cybersecurity", description: "Understanding of malware, threats, and mitigation strategies." },
  { name: "Networking", description: "Network simulation, VPN concepts, and troubleshooting using Cisco Packet Tracer." },
  { name: "Automation", description: "Advanced scripting skills in Python and PowerShell for system administration tasks." },
];

const softSkills: Skill[] = [
  { name: "Problem Solving", description: "Improved problem-solving abilities in technical environments." },
  { name: "Communication", description: "Enhanced collaboration and communication skills while working with mentors." },
  { name: "Research and Documentation", description: "Strengthened research and documentation skills." },
];

export function Skills() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 dark:text-blue-100 font-serif">
        Skills
      </h2>

      <Tabs defaultValue="technical">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="technical">Technical Skills</TabsTrigger>
          <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="space-y-6">
          <div className="grid gap-6">
            {technicalSkills.map((skill: Skill, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 dark:text-blue-100">
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="soft" className="space-y-6">
          <div className="grid gap-6">
            {softSkills.map((skill: Skill, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 dark:text-blue-100">
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
