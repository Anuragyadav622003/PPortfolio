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
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,

} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
 
};

export const navLinks = [,
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Programmer",
    icon: web,
  },
  {
    title: "Java Programmer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [

  {
    title: "Software Developer",
    company_name: "CipherByte Technologies pvt.lmt ( Software development intern ",
    company_website:"#",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Gain practical experience by contributing to real-world projects and applying theoretical knowledge",
      "Improve programming skills and learn best practices in software development.",
      "Receive mentorship from experienced developers while building valuable professional connections."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Codsoft (C++ programmer intern)",
    company_website: "https://github.com/Anuragyadav622003/FitFolio-Health-Fitness-Tracker-app-android",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Sep 2023",
    points: [
     "Collaborate with cross-functional teams to understand project requirements and contribute to the overall software development process.",
     "Participate in code reviews and learn to write clean, maintainable code while receiving constructive feedback from peers.",
     "Assist in debugging and troubleshooting software issues, gaining insights into problem-solving and quality assurance practices."
    ],
  },
 
];

const projects = [
  {
    name: "Food Delivery",
    description:
      "The QuickBite frontend offers a sleek and intuitive interface, making it easy to browse local restaurants and menus.With responsive design and engaging features, users can effortlessly place orders and track their deliveries in real-time",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image:aptihealthApp ,
    hosted_link: "https://github.com/bajpaipoornima/food-website",
  },
  {
    name: "Tutle-graphics",
    description:
      "The Turtle graphics project showcases the beauty of programming by creating stunning visual patterns and shapes with simple code.Users can explore their creativity by manipulating colors, angles, and movements, resulting in unique and captivating designs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://github.com/bajpaipoornima/turtel_graphics",
  },
  {
    name: "CBT-Calculator",
    description:
      "The CBT calculator project provides a user-friendly interface for students to practice and evaluate their knowledge with interactive quizzes.With features like timed assessments and instant feedback, users can enhance their learning experience!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://github.com/bajpaipoornima/CBTC_-CALCULATER",
  },
  // {
  //   name: "Zeal App",
  //   description:
  //     "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
  //   tags: [
  //     {
  //       name: "react-native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "sendgrid",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: zealApp,
  //   hosted_link:
  //     "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  // },
  // {
  //   name: "Roll Web",
  //   description:
  //     "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
  //   tags: [
  //     {
  //       name: "reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "formik",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: rollWeb,
  //   hosted_link: "https://app.tryroll.com/",
  // },
  // {
  //   name: "Roll App",
  //   description:
  //     "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
  //   tags: [
  //     {
  //       name: "react-native-web",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "storybook",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: rollApp,
  //   hosted_link:
  //     "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  // },
];

const personalInfo = {
  name: "Poornima Bajpai",
  fullName: "Poornima Bajpai",
  email: "pornima20jan@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in HTML, CSS 
  JavaScript, and expertise in frameworks like React.js . I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://docs.google.com/document/d/12ERZYD1n8laV8XQZRxAQZ8f_KWM-Y25f/edit?usp=sharing&ouid=104627593200199733155&rtpof=true&sd=true",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/poornima-bajpai-3b3801227/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/bajpaipoornima",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
