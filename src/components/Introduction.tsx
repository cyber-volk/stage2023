'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Introduction() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 dark:text-blue-100 font-serif">
        Introduction
      </h2>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
        <CardContent className="p-6 sm:p-8 space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            During my internship at Tunisie Telecom, the first telecommunications company in Tunisia under the Ministry of Communication, I had the opportunity to work alongside a system administrator, Mr. Hbib Jbir, as my mentor. Tunisie Telecom's position as a leading governmental entity uniquely shaped my learning experience by exposing me to the complexities of working within public sector frameworks. This setting offered a distinctive perspective on how governmental priorities influence technical operations, resource allocation, and compliance, providing valuable insights that are often absent in private sector internships. This experience allowed me to gain insights and practical knowledge in areas such as Active Directory, cybersecurity, networking architecture, and automation. This report outlines my experiences, tasks, and the knowledge gained during the five-week internship, which took place from September 1, 2023, to October 7, 2023.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}