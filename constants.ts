
import { Project, Education, Certification, SkillCategory } from './types';

export const RESUME_DATA = {
  name: "Akhilesh Datta",
  title: "Aspiring Software Engineer",
  tagline: "Final Year Diploma Student in Computer Science — Open to Internships",
  email: "akd9655@gmail.com",
  phone: "9686732007",
  location: "Bengaluru, India",
  linkedin: "linkedin.com/in/Akhilesh-datta",
  github: "github.com/a777r1",
  summary: "Final-year Diploma student in Computer Science and Engineering with a strong foundation in programming, databases, and software development fundamentals. Hands-on experience in building Python and web-based projects using clean, structured code. Actively seeking internship opportunities to gain real-world experience and contribute to development teams.",
  skills: [
    { category: "Programming Languages", skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"] },
    { category: "Web Technologies", skills: ["HTML", "CSS", "JavaScript", "React (Basic)"] },
    { category: "Databases", skills: ["MySQL", "SQL", "DBMS Concepts"] },
    { category: "Tools & Platforms", skills: ["Git", "GitHub", "VS Code", "Spyder", "GitHub Pages"] },
    { category: "Operating Systems", skills: ["Windows", "Linux (Basic Commands)"] }
  ] as SkillCategory[],
  education: [
    {
      institution: "Acharya Polytechnic",
      location: "Bengaluru, India",
      period: "Jan 2023 – Dec 2026",
      degree: "Diploma in Computer Science & Engineering"
    },
    {
      institution: "Orchids International School",
      location: "Bengaluru, India",
      period: "Jan 2022 – Dec 2023",
      degree: "Secondary Education"
    }
  ] as Education[],
  projects: [
    {
      title: "AI-Powered Portfolio Website",
      description: [
        "Designed and developed a responsive portfolio website using HTML, CSS, JavaScript, and React.",
        "Improved usability by modifying and refactoring AI-generated layouts.",
        "Deployed the application using GitHub Pages."
      ],
      link: "https://studyflowai.github.io",
      tags: ["React", "Tailwind", "UI/UX"]
    },
    {
      title: "Student Result Management System",
      description: [
        "Developed a Python-based application using object-oriented programming principles.",
        "Implemented student data input, grade calculation logic, and file-based data persistence.",
        "Strengthened understanding of Python fundamentals and clean coding practices."
      ],
      link: "https://github.com/a777r1/StudentResult",
      tags: ["Python", "OOP", "File Handling"]
    }
  ] as Project[],
  certifications: [
    { title: "Python for Data Science, AI & Development", date: "Oct 2024" },
    { title: "Bitcoin for Developers", date: "Oct 2025" },
    { title: "Getting Started with Microsoft Excel", date: "Nov 2025" },
    { title: "Build a Free Website with WordPress", date: "Nov 2025" },
    { title: "Build a Computer Vision App with Azure Cognitive Services", date: "Nov 2025" }
  ] as Certification[],
  strengths: [
    "Strong problem-solving and analytical thinking",
    "Ability to understand and improve existing codebases",
    "Quick learner with adaptability to new technologies",
    "Effective communication and teamwork skills"
  ]
};
