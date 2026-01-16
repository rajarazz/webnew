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
  starbucks,
  tesla,
  shopify,
  threejs,
  shoe,
  res1,
  res2,
  res3,
  gym,
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Three JS",
    icon: threejs,
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
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Gifting Delight",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2022",
    points: [
      "Implemented responsive layouts and reusable components.",
      
    ],
  },
  {
    title: "Web Development Projects",
    company_name: "Academic & Personal Projects",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Built multiple React-based projects to strengthen frontend fundamentals.",
      
    ],
  },
  {
    title: "Web Developer",
    //company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    //date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Sanity Softwares",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 10 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Raj delivered a clean and professional frontend that matched our requirements perfectly.",
    name: " Team Member",
    //designation: "CFO",
    company: "Gifting Delight Pvt. Ltd.",
    //image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Strong understanding of React fundamentals and great attention to UI details.",
    name: " Mentor",
    //designation: "COO",
    company: "COllege",
    //image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Quick learner with a good problem-solving approach in frontend development.",
    name: "Reviewer",
    designation: "Project Evaluation Panel",
    //company: "456 Enterprises",
    //image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shoe Shop",
   // description:
    //  "online store",
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
    image: shoe,
    source_code_link: "https://rajarazz.github.io/Project1/",
  },
  {
    name: "Restaurant 1",
   // description:
      //"A digital presence",
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
    image: res1,
    source_code_link: "https://restaurantwebxraj3.netlify.app/",
  },
  {
    name: "Restaurant 2",
    //description:
    //"web 2",
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
    image: res2,
    source_code_link: "https://restaurantwebxraj2.netlify.app/",
  },

  {
    name: "Restaurant 3",
    //description:
    //web 2",
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
    image: res3,
    source_code_link: "https://restaurantwebxraj.netlify.app/",
  },

  {
    name: "The Mahaveer Gym",
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
    image: gym,
    source_code_link: "https://rajarazz.github.io/gym/",
  },

];

export { services, technologies, experiences, testimonials, projects };
