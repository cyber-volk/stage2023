"use client"

import React, { createContext, useState, useContext } from 'react';

interface TranslationContent {
  [key: string]: string | TranslationContent | string[] | Array<{ [key: string]: string }>;
}

const translations: Record<string, TranslationContent> = {
  en: {
    content: {
      welcome: {
        title: "Internship Report 2023",
        subtitle: "A comprehensive documentation of my internship experience at Tunisie Telecom",
        technology: {
          title: "Technology Overview",
          description: "This section provides an overview of the technologies used during the internship.",
          features: [
            "Feature 1",
            "Feature 2",
            "Feature 3"
          ]
        },
        overview: {
          title: "Overview",
          description: "This section provides a general overview of the internship."
        },
        navigation: {
          title: "Navigation Guide",
          description: "Use the sidebar to navigate through different sections of the report.",
          info: "Additional navigation information."
        }
      },
      introduction: {
        title: "Introduction",
        companyOverview: {
          title: "Company Overview",
          description: "During my internship at Tunisie Telecom, the first telecommunications company in Tunisia under the Ministry of Communication, I had the opportunity to work alongside a system administrator, Mr. Hbib Jbir, as my mentor. Tunisie Telecom's position as a leading governmental entity uniquely shaped my learning experience by exposing me to the complexities of working within public sector frameworks. This setting offered a distinctive perspective on how governmental priorities influence technical operations, resource allocation, and compliance, providing valuable insights that are often absent in private sector internships. This experience allowed me to gain insights and practical knowledge in areas such as Active Directory, cybersecurity, networking architecture, and automation. This report outlines my experiences, tasks, and the knowledge gained during the five-week internship, which took place from September 1, 2023, to October 7, 2023.",
          keyPoints: [
            "First telecommunications company in Tunisia",
            "Under the Ministry of Communication",
            "Leading governmental entity",
            "Focus on public sector frameworks"
          ]
        },
        internshipGoals: {
          title: "Internship Goals",
          description: "Key objectives and learning targets during the internship period",
          objectives: [
            "Gain practical experience in system administration",
            "Learn Active Directory management",
            "Understand cybersecurity practices",
            "Develop networking architecture skills",
            "Master automation techniques"
          ]
        }
      },
      skills: {
        title: "Skills Gained",
        technicalSkills: {
          title: "Technical Skills",
          description: "Technical skills acquired during the internship",
          skills: [
            { name: "System Administration", description: "Managing Windows Server environments" },
            { name: "Network Security", description: "Understanding security protocols and implementations" }
          ]
        },
        softSkills: {
          title: "Soft Skills",
          description: "Professional skills developed",
          skills: [
            { name: "Communication", description: "Effective technical communication" },
            { name: "Problem Solving", description: "Analytical approach to challenges" }
          ]
        }
      },
      challenges: {
        title: "Challenges and Solutions",
        technicalChallenges: {
          title: "Technical Challenges",
          challenges: [
            {
              problem: "Server Configuration",
              solution: "Implemented systematic approach",
              outcome: "Successfully configured server environment"
            }
          ]
        },
        problemSolving: {
          title: "Problem-Solving Approach",
          steps: [
            "Identify the issue",
            "Analyze root causes",
            "Implement solutions"
          ]
        }
      }
    }
  },
  fr: {
    content: {
      welcome: {
        title: "Rapport de Stage 2023",
        subtitle: "Une documentation complète de mon expérience de stage chez Tunisie Telecom",
        technology: {
          title: "Aperçu Technologique",
          description: "Cette section fournit un aperçu des technologies utilisées pendant le stage.",
          features: [
            "Fonctionnalité 1",
            "Fonctionnalité 2",
            "Fonctionnalité 3"
          ]
        },
        overview: {
          title: "Aperçu",
          description: "Cette section fournit un aperçu général du stage."
        },
        navigation: {
          title: "Guide de Navigation",
          description: "Utilisez la barre latérale pour naviguer dans les différentes sections du rapport.",
          info: "Informations supplémentaires sur la navigation."
        }
      },
      introduction: {
        title: "Introduction",
        companyOverview: {
          title: "Présentation de l'Entreprise",
          description: "Durant mon stage chez Tunisie Telecom, première entreprise de télécommunications en Tunisie sous la tutelle du Ministère des Communications, j'ai eu l'opportunité de travailler aux côtés d'un administrateur système, M. Hbib Jbir, en tant que mentor. La position de Tunisie Telecom en tant qu'entité gouvernementale majeure a façonné de manière unique mon expérience d'apprentissage en m'exposant aux complexités du travail dans le cadre du secteur public. Ce cadre a offert une perspective distinctive sur la façon dont les priorités gouvernementales influencent les opérations techniques, l'allocation des ressources et la conformité, fournissant des aperçus précieux souvent absents des stages du secteur privé. Cette expérience m'a permis d'acquérir des connaissances et une expérience pratique dans des domaines tels que l'Active Directory, la cybersécurité, l'architecture réseau et l'automatisation. Ce rapport décrit mes expériences, mes tâches et les connaissances acquises au cours du stage de cinq semaines, qui s'est déroulé du 1er septembre 2023 au 7 octobre 2023.",
          keyPoints: [
            "Première entreprise de télécommunications en Tunisie",
            "Sous la tutelle du Ministère des Communications",
            "Entité gouvernementale majeure",
            "Focus sur les cadres du secteur public"
          ]
        },
        internshipGoals: {
          title: "Objectifs du Stage",
          description: "Objectifs clés et cibles d'apprentissage pendant la période de stage",
          objectives: [
            "Acquérir une expérience pratique en administration système",
            "Apprendre la gestion d'Active Directory",
            "Comprendre les pratiques de cybersécurité",
            "Développer des compétences en architecture réseau",
            "Maîtriser les techniques d'automatisation"
          ]
        }
      },
      skills: {
        title: "Compétences Acquises",
        technicalSkills: {
          title: "Compétences Techniques",
          description: "Compétences techniques acquises pendant le stage",
          skills: [
            { name: "Administration Système", description: "Gestion des environnements Windows Server" },
            { name: "Sécurité Réseau", description: "Compréhension des protocoles de sécurité et des implémentations" }
          ]
        },
        softSkills: {
          title: "Compétences Douces",
          description: "Compétences professionnelles développées",
          skills: [
            { name: "Communication", description: "Communication technique efficace" },
            { name: "Résolution de Problèmes", description: "Approche analytique des défis" }
          ]
        }
      },
      challenges: {
        title: "Challenges and Solutions",
        technicalChallenges: {
          title: "Technical Challenges",
          challenges: [
            {
              problem: "Server Configuration",
              solution: "Implemented systematic approach",
              outcome: "Successfully configured server environment"
            }
          ]
        },
        problemSolving: {
          title: "Problem-Solving Approach",
          steps: [
            "Identify the issue",
            "Analyze root causes",
            "Implement solutions"
          ]
        }
      }
    }
  }
};

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, namespace?: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string, namespace?: string): string | string[] => {
    const keys = key.split('.');
    let translation: TranslationContent | string | string[] | Array<{ [key: string]: string }> = namespace 
      ? translations[language][namespace] as TranslationContent
      : translations[language] as TranslationContent;

    // Traverse nested keys
    for (const k of keys) {
      if (translation && typeof translation === 'object' && !Array.isArray(translation) && k in translation) {
        translation = translation[k];
      } else {
        return `Missing translation: ${key}`;
      }
    }

    // Handle the case where translation is an array
    if (Array.isArray(translation)) {
      return translation.map(item => {
        if (typeof item === 'string') {
          return item;
        } else if (typeof item === 'object') {
          return JSON.stringify(item);
        }
        return '';
      });
    }

    return translation as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
