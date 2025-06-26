import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  gru,
  sortwind,
  starbucks,
  tesla,
  shopify,
  carrent,
  post,
  gym,
  war,
  logo,
  playnue,
  jobit,
  tripguide,
  threejs,
  ecart,
  next,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "next",
    icon: next,
  },
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "SortWind",
    icon:sortwind,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Graphic Era University",
    icon: gru,
    iconBg: "#E6DEDD",
    date: "March 2024 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
  title: "Full Stack Developer",
  company_name: "Playnue",
  icon: playnue, // replace with your actual icon import or variable
  iconBg: "#D6EAF8", // optional: change the color to match Playnue's branding
  date: "Nov 2024 - Apr 2025",
  points: [
    "Built and maintained scalable web applications using modern technologies including Next.js, GraphQL, PostgreSQL, and Hasura for efficient data fetching and backend management.",
    "Collaborated with UI/UX designers and backend teams to deliver seamless and efficient user experiences.",
    "Developed RESTful APIs and integrated third-party services to enhance application functionality.",
    "Ensured mobile responsiveness, optimized performance, and implemented best practices for code quality.",
  ],
},
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fitness Website",
    description:
      "Web-based platform that allows users to search, train, and manage exercise of various forms",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://fitness.netlify.app/",
  },
  {
    name: "E-Cart",
    description:
      "Web application that enables users to search for Products, order products with payment integration",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ecart,
    source_code_link: "https://wireviewfrontend1.vercel.app/",
  },
  {
    name: "War Game",
    description:
      "A powerful shooting game designed in javascript",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: war,
    source_code_link: "https://cars.netlify.app/",
  },
 {
  name: "Playnue",
  description:
    "A full-stack web application that allows users to discover and book nearby sports venues. Built with Next.js and powered by Nhost, leveraging Hasura, GraphQL, PostgreSQL, and Docker for scalable and efficient deployment.",
  tags: [
    {
      name: "nextjs",
      color: "blue-text-gradient",
    },
    {
      name: "postgresql",
      color: "green-text-gradient",
    },
    {
      name: "nhost",
      color: "purple-text-gradient",
    },
    {
      name: "docker",
      color: "cyan-text-gradient",
    },
  ],
  image: playnue, // Ensure 'war' is the actual image or screenshot of the Playnue app
  source_code_link: "https://www.playnue.com", // Replace this with the actual GitHub or live link
}

];

export { services, technologies, experiences, testimonials, projects };
