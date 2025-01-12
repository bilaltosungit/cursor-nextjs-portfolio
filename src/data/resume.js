import { getImagePath } from '@/utils/paths';

export const resumeData = {
  // Personal Information
  personalInfo: {
    name: "Bilal Tosun",
    title: "Software Developer",
    email: "bilaltosun7@gmail.com",
    phone: "+90 506 509 82 48",
    location: "Turkey",
    summary: "Frontend Developer with experience since 2020, starting in Software QA and transitioning into frontend development. I work within the Scrum methodology, collaborating closely with teams to enhance projects. Passionate about open-source, AI tools, and creating with AI, I continuously explore new technologies to bring innovation and fresh perspectives.",
  },

  // Skills
  skills: [
    {
      name: "JavaScript",
      level: "Advanced",
      icon: "🚀",
    },
    {
      name: "TypeScript",
      level: "Advanced",
      icon: "📘",
    },
    {
      name: "React",
      level: "Advanced",
      icon: "⚛️",
    },
    {
      name: "Next.js",
      level: "Intermediate",
      icon: "▲",
    },
    {
      name: "Angular",
      level: "Advanced",
      icon: "🅰️",
    },
    {
      name: "HTML/CSS",
      level: "Advanced",
      icon: "🎨",
    },
    {
      name: "NgRx/NGXS",
      level: "Intermediate",
      icon: "📦",
    },
    {
      name: "Material UI",
      level: "Intermediate",
      icon: "🎯",
    }
  ],

  // Work Experience
  experience: [
    {
      title: "Front End Developer",
      company: "Gelir İdaresi Başkanlığı",
      location: "Turkey",
      period: "October 2021 - Present",
      description: "Working on 'Dijital Vergi Dairesi' project. Developing front-end web projects using React and Next.js with JavaScript, HTML5 and CSS. Working with Material UI for UI elements and collaborating with UX team. Testing API methods using Swagger and Postman. Implementing pull request and code review culture.",
      technologies: ["React", "Next.js", "JavaScript", "Material UI"],
    },
    {
      title: "Front End Developer",
      company: "ETIYA",
      location: "Remote",
      period: "September 2020 - October 2021",
      description: "Worked on international projects with team members from Canada and Ukraine. Used Angular as framework with NGXS for state management. Implemented Atomic Design pattern and pixel-perfect web design based on UI-kit and customer feedback. Managed analytics with Google Analytics via GTM, UTM, and Hotjar.",
      technologies: ["Angular", "NGXS", "TypeScript", "Google Analytics"],
    },
    {
      title: "Front End Developer",
      company: "Piton Technology",
      location: "On-site",
      period: "December 2019 - July 2020",
      description: "Developed cross-browser compatible code with TypeScript and HTML5. Used CSS, Bootstrap and themes for web applications. Implemented pixel-perfect web design and worked with Angular framework and NgRx for state management.",
      technologies: ["Angular", "NgRx", "TypeScript", "Bootstrap"],
    },
    {
      title: "Software QA Engineer",
      company: "Piton Technology",
      location: "Eskişehir",
      period: "March 2019 - November 2019",
      description: "Monitored testing activities and results with UI automation. Managed code quality in SonarQube with static code analyzing. Developed e2e test cases and automated test scripts using Selenium and Protractor.",
      technologies: ["Selenium", "Protractor", "SonarQube", "Jenkins"],
    }
  ],

  // Projects
  projects: [
    {
      title: "Digital Tax Office",
      description: "Digital Tax Office combines the Administration's projects such as Interaktif Vergi Dairesi, Defter-Beyan Sistemi, and more. Built a modern front-end architecture and created reusable components for all projects' UI elements.",
      technologies: ["React", "Next.js", "Material UI"],
      period: "January 2022 - Present",
      companyRef: "Gelir İdaresi Başkanlığı",
      image: getImagePath("/images/digital-tax.jpg")
    },
    {
      title: "Videotron's Helix TV and Internet Service",
      description: "Developed a multi-device TV and Internet platform service for Videotron. Implemented voice commands for searching integrated TV content from multiple sources including Netflix, YouTube, and premium channels.",
      technologies: ["Angular", "NGXS"],
      period: "November 2019 - Present",
      companyRef: "ETIYA",
      image: getImagePath("/images/helix-tv.jpg")
    },
    {
      title: "Tanzania Railways Corporations Ticketing System",
      description: "Developed web platforms for train ticketing system including Online Ticketing System and Admin Panel using Angular with NgRx for state management.",
      technologies: ["Angular", "NgRx"],
      companyRef: "Piton Technology",
      period: "November 2019 - Present",
      image: getImagePath("/images/tanzania-railways.jpg")
    },
    {
      title: "BURULAŞ Fleet Management System",
      description: "Developed a web platform to track Burulaş's fleet, manage headway and violation by Control Center using Angular and OpenLayers.",
      technologies: ["Angular", "OpenLayers"],
      period: "February 2019 - April 2020",
      companyRef: "Piton Technology",
      image: getImagePath("/images/burulas.jpg")
    }
  ],

  // Education
  education: [
    {
      degree: "Computer Engineering",
      school: "Eskişehir Osmangazi University",
      location: "Turkey",
      period: "2018",
    }
  ],

  // Additional Skills
  additionalSkills: {
    tools: [
      { name: "GitLab", icon: "🔄" },
      { name: "Jenkins", icon: "⚙️" },
      { name: "VSCode", icon: "💻" },
      { name: "WebStorm", icon: "🌐" },
      { name: "SonarQube", icon: "🔍" },
      { name: "Selenium", icon: "🤖" },
      { name: "Protractor", icon: "🔄" },
      { name: "Bitbucket", icon: "📦" },
      { name: "Sourcetree", icon: "🌳" },
      { name: "JIRA", icon: "📋" },
      { name: "Slack", icon: "💬" }
    ],
    softSkills: [
      "Adaptive",
      "Quick Learner",
      "Inquiring",
      "Team Member",
      "Strong Communication"
    ],
    languages: [
      {
        name: "English",
        level: "Professional working proficiency"
      }
    ],
    industrial: [
      "Front End Development",
      "UI Automation Test",
      "Analysis & Reporting",
      "Scrum, Agile",
      "Test case, use case, user guide"
    ]
  },

  // Social Links
  socialLinks: {
    linkedin: "https://linkedin.com/in/bilaltosundev",
    // Add more social links if available
  },
}; 