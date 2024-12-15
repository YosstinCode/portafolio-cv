export interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  theme: string;
  location: {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
  };
  profiles: {
    network: string;
    username: string;
    url: string;
  }[];
}

export interface Certificate {
  name: string;
  date: string;
  issuer: string;
  url: string;
  relevant: boolean;
}

export type Certificates = Certificate[];

export interface CertificatesUI {
  title: string;
  certificates: Certificates;
}

export interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate?: string;
  score: string;
  details: string[];
}

export type Educations = Education[];

export interface EducationUI {
  title: string;
  educations: Educations;
}

export interface Project {
  name: string;
  isActive: boolean;
  description: string;
  highlights: string[];
  url: string;
  github?: string;
}

export type Projects = Project[];

export interface ProjectsUI {
  title: string;
  projects: Projects;
}

export interface Skill {
  name: string;
  level: string;
  keywords: string[];
}

export type Skills = Skill[];

export interface SkillsUI {
  title: string;
  skills: Skills;
}

export interface Work {
  name: string;
  position: string;
  url: string;
  location_type: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string;
  achievements: string[] | null;
  responsibilities: string[];
  skills: string[];
}

export type Works = Work[];

export interface WorkUI {
  title: string;
  works: Works;
}

export interface Experience {
  title: string;
  summary: string;
  responsabilities: string;
  achievements: string;
}

export interface Hero {
  "email.copy": string;
}

export interface Months {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
  "10": string;
  "11": string;
}

// keyBoardManager: {
//     socialSection: { name: "Social networks" },
//     visit: "Visit",
//     press: "Press",
//     callActionPress: "to open the command palette",
//     placeholder: "Search command...",
//     printSection: {
//       name: "Actions",
//       title: "Print CV",
//     },
//   },

export interface KeyBoardManagerUI {
  socialSection: { name: string };
  visit: string;
  press: string;
  callActionPress: string;
  placeholder: string;
  actionsSection: {
    name: string;
    actions: {
      name: string;
      icon: string;
    }[];
  };
  footerSection: {
    toSelect: string;
    toNavigate: string;
    toClose: string;
  };
}

export type LanguageList = "en" | "es";
