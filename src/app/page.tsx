'use client'

import React from 'react'
import { Welcome } from '@/components/Welcome'
import { Introduction } from '@/components/Introduction'
import { Overview } from '@/components/Overview'
import { Tasks } from '@/components/Tasks'
import { Skills } from '@/components/Skills'
import { Challenges } from '@/components/Challenges'
import { Takeaways } from '@/components/Takeaways'
import { Conclusion } from '@/components/Conclusion'
import { Acknowledgments } from '@/components/Acknowledgments'
import { ProjectsWorkflows } from '@/components/ProjectsWorkflows'
import { AutomationScripts } from '@/components/AutomationScripts'
import { Glossary } from '@/components/Glossary'
import { useNavigation } from '@/contexts/NavigationContext'
import { sections } from '@/data/sections'

export default function InternshipReport() {
  const { activeSection } = useNavigation()

  const renderContent = () => {
    switch (activeSection) {
      case 'welcome':
        return <Welcome />
      case 'introduction':
        return <Introduction />
      case 'overview':
        return <Overview />
      case 'tasks':
        return <Tasks />
      case 'skills':
        return <Skills />
      case 'challenges':
        return <Challenges />
      case 'takeaways':
        return <Takeaways />
      case 'conclusion':
        return <Conclusion />
      case 'acknowledgments':
        return <Acknowledgments />
      case 'projects-workflows':
        return <ProjectsWorkflows />
      case 'automation-scripts':
        return <AutomationScripts />
      case 'glossary':
        return <Glossary />
      default:
        return <Welcome />
    }
  }

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  )
}

