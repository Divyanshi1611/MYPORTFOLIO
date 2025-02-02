import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/assets/project-1.jpeg';
import Work2 from './assets/assets/project-2.jpg';
import Work3 from './assets/assets/project-3.jpeg';
import Work4 from './assets/assets/project-4.jpeg';
import Work5 from './assets/assets/project-5.jpg';
import Work6 from './assets/assets/project-6.jpg';

import Theme1 from './assets/assets/purple.png';
import Theme2 from './assets/assets/red.png';
import Theme3 from './assets/assets/blueviolet.png';
import Theme4 from './assets/assets/blue.png';
import Theme5 from './assets/assets/goldenrod.png';
import Theme6 from './assets/assets/magenta.png';
import Theme7 from './assets/assets/yellowgreen.png';
import Theme8 from './assets/assets/orange.png';
import Theme9 from './assets/assets/green.png';
import Theme10 from './assets/assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Divyanshi',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Sharma',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '0 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Greater Noida, India',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+82XXXXXXXXX',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'testing@mail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'Divyanshi_123',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Hindi'
  },
];

export const stats = [
  {
    id: 1,
    no: '0',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '12',
    title: 'Completed <br /> Projects',
  },

];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2025 - PRESENT',
    title: 'Student<span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  
  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022-2026',
    title: 'Bachelor of Technology(Computer Science and Engineering(AIML))<span> Dr. APJ Abdul Kalam Technical University</span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Higher Secondary Examination<span> HACS</span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'Senior Secondary Examination <span> HACS </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '25',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Python',
    percentage: '66',
  },

  {
    id: 5,
    title: 'C++',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Django',
    percentage: '50',
  },

  {
    id: 7,
    title: 'SQL',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Good communicator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
