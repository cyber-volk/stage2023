'use client'

import { Card, CardContent } from './ui/card';
import Image from 'next/image';

export function Welcome() {
  return (
    <div className="space-y-8 py-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-950 dark:text-blue-100 font-serif">
          Welcome to My Internship Report
        </h1>
        <div className="flex justify-center py-4">
          <Image
            src="/images/0_LOGO_TT.jpg"
            alt="Tunisie Telecom Logo"
            width={150}
            height={150}
            className="mb-4"
          />
        </div>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
          Navigate through the sections to explore my experiences and insights gained during my internship at Tunisie Telecom.
        </p>
      </div>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <CardContent className="p-6 sm:p-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-100">
                Technologies Used
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                This application is built using modern technologies such as Next.js for a single-page application experience, and Tailwind CSS for styling. The integration of AI tools, including Windsurf AI, facilitated the generation of dynamic content and enhanced the overall development process.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-100">
                About the Internship
              </h2>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
                  <strong>By:</strong> Yassin Sbaai<br />
                  <strong>Period:</strong> September 1, 2023 - October 7, 2023<br />
                  <strong>Supervisor:</strong> Mr. Hbib Jbir
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
