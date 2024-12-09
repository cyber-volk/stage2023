'use client'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface Challenge {
  problem: string;
  solution: string;
  outcome: string;
}

const challengesData: Challenge[] = [
  {
    problem: "Server Configuration",
    solution: "Implemented systematic approach",
    outcome: "Successfully configured server environment"
  },
  {
    problem: "Network Security",
    solution: "Conducted security assessments and implemented security measures",
    outcome: "Enhanced network security and reduced vulnerabilities"
  },
  {
    problem: "Active Directory Management",
    solution: "Developed scripts for automated user management and policy enforcement",
    outcome: "Streamlined Active Directory operations and improved efficiency"
  },
  {
    problem: "VPN Setup and Configuration",
    solution: "Researched and implemented VPN solutions for secure remote access",
    outcome: "Established secure and reliable remote access for users"
  },
  {
    problem: "Automation of Routine Tasks",
    solution: "Created PowerShell and Python scripts for task automation",
    outcome: "Increased productivity and reduced manual workload"
  },
  // Add more challenges as needed
];

const problemSolvingSteps: string[] = [
  "Identify the issue",
  "Analyze root causes",
  "Implement solutions",
  "Evaluate outcomes",
  "Document findings and improvements"
];

export function Challenges() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 dark:text-blue-100 font-serif">
        Challenges and Solutions
      </h2>

      <Tabs defaultValue="technical">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="technical">Technical Challenges</TabsTrigger>
          <TabsTrigger value="approach">Problem-Solving Approach</TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="space-y-6">
          <div className="grid gap-6">
            {challengesData.map((challenge: Challenge, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 dark:text-blue-100">
                    {challenge.problem}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Solution:</h4>
                    <p className="text-gray-700 dark:text-gray-300">{challenge.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Outcome:</h4>
                    <p className="text-gray-700 dark:text-gray-300">{challenge.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="approach" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Problem-Solving Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-4">
                {problemSolvingSteps.map((step: string, index: number) => (
                  <li key={index} className="text-lg text-gray-700 dark:text-gray-300">
                    {step}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
