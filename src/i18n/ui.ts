//*******************Castellano*************************/
import basics from '@/i18n/es/basics.json';
import Certificates from '@/i18n/es/certificates.json';
import education from '@/i18n/es/education.json';
import projects from '@/i18n/es/projects.json';
import skills from '@/i18n/es/skills.json';
import work from '@/i18n/es/work.json';
import months from '@/i18n/es/months.json';
//*******************Inglés*************************/
import basicsEn from '@/i18n/en/basics.json';
import CertificatesEn from '@/i18n/en/certificates.json';
import educationEn from '@/i18n/en/education.json';
import projectsEn from '@/i18n/en/projects.json';
import skillsEn from '@/i18n/en/skills.json';
import workEn from '@/i18n/en/work.json';
import monthsEn from '@/i18n/en/months.json';
//*************************************************/
import languages from '@/i18n/languages.json';

export const ui = {
    es: {
        basics,
        certificates: {
          title: 'Certificados',
          certificates: [...Certificates],
        },
        education: {
          title: 'Educación',
          educations: [...education],
        },
        projects: {
          title: 'Proyectos',
          projects: [...projects],
        },
        skills:{
          title: 'Habilidades',
          skills: [...skills],
        },
        work: {
            title: 'Experiencia laboral',
            works: [...work],
        },
        present: {
            label: 'Actualmente'
        },
        showMore: {
            label: 'Ver más'
        },
        showLess: {
            label: 'Ver menos'
        },
        portfolio: {
            label: 'Portafolio'
        },
        experience: {
          title: 'Experiencia',
          summary: 'Resumen',
          responsabilities: 'Responsabilidades',
          achievements: 'Logros',
        },
        about:{
          title: 'Sobre mí'
        },
        hero: {
          'email.copy': 'Copiado!',
        },
        months
    },
    en: {
        basics: basicsEn,
        certificates: {
          title: 'Certificates',
          certificates: [...CertificatesEn],
        },
        education: {
          title: 'Education',
          educations: [...educationEn],
        },
        projects: {
          title: 'Projects',
          projects: [...projectsEn],
        },
        skills:{
          title: 'Skills',
          skills: [...skillsEn],
        },
        work: {
            title: 'Work experience',
            works: [...workEn],
        },
        present: {
            label: 'Present'
        },
        showMore: {
            label: 'Show more'
        },
        showLess: {
          label: 'Show less'
        },
        portfolio: {
            label: 'Portfolio'
        },
        experience: {
          title: 'Experience',
          summary: 'Summary',
          responsabilities: 'Responsabilities',
          achievements: 'Achievements',
        },
        about:{
          title: 'About me'
        },
        hero: {
          'email.copy': 'Email copied!',
        },
        months: monthsEn
    }
}

interface LanguageList {
  [key: string]: {
    text: string;
    country: string;
    icon: string;
  };
}

export const languageList: LanguageList = languages;

export const defaultLang = 'es';