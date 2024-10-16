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
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
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
    title: "Software Engineer",
    company_name: "",
    company_website: "https://e-learning-plateform-six.vercel.app/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Present",
    points:  [
      "Building a dynamic and interactive platform for delivering engaging online courses using modern web and mobile technologies.",
      "Collaborating with subject matter experts, instructional designers, and developers to create high-quality educational content.",
      "Implementing a user-friendly interface and responsive design, ensuring accessibility on web and mobile devices.",
      "Enabling personalized learning paths, progress tracking, and performance analytics for a tailored educational experience.",
      "Supporting real-time collaboration through interactive features like quizzes, discussions, and live sessions.",
      "Ensuring the platform's scalability, security, and cross-browser compatibility.",
      "Integrating multimedia content such as videos, infographics, and assessments to enhance learning outcomes.",
      "Gathering feedback from learners and educators to continuously improve platform features and content."
    ],
  },
  {
    title: "Software Developer",
    company_name: "",
    company_website:"https://e-learning-plateform-admin.vercel.app/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Present",
    points: [
      "Providing a clean and intuitive interface for learners to easily access courses, assignments, and learning materials.",
      "Displaying real-time progress tracking, including course completion percentages, upcoming deadlines, and learning milestones.",
      "Offering personalized course recommendations based on learner interests and performance history.",
      "Integrating detailed performance analytics, allowing users to view quiz results, grades, and feedback from instructors.",
      "Enabling easy navigation through course modules, assignments, and assessments with a clear layout and organized structure.",
      "Supporting communication tools such as messaging, discussion forums, and announcements to facilitate collaboration between learners and instructors.",
      "Allowing users to set goals, track their achievements, and monitor their learning paths on the dashboard.",
      "Providing instant access to certificates and achievements upon course completion."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "",
    company_website: "https://github.com/Anuragyadav622003/FitFolio-Health-Fitness-Tracker-app-android",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "May 2023 - Jul 2023",
    points: [
      "Offering a personalized dashboard displaying daily, weekly, and monthly fitness goals and progress tracking.",
      "Providing real-time updates on activity metrics such as steps, calories burned, distance covered, and heart rate monitoring.",
      "Enabling users to log workouts, set goals, and track progress across different fitness activities like running, cycling, swimming, and more.",
      "Displaying nutrition tracking with daily calorie intake, macronutrient breakdown, and meal recommendations for personalized diet plans.",
      "Integrating workout plans, video tutorials, and guided exercise routines directly on the dashboard for easy access.",
      "Allowing users to set fitness challenges and compete with friends or within the community for added motivation.",
      "Offering goal-setting tools for tracking weight loss, muscle gain, or general health improvements.",
      "Providing reminders and notifications for workouts, hydration, and rest periods to maintain consistency.",
      "Supporting integration with wearable devices to sync data on activity, sleep patterns, and overall health metrics."
    ],
  },
  {
    title: "Full Stack  Developer",
    company_name: "",
    company_website: "https://arun-job-seeker.netlify.app",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points:[
      "Providing a user-friendly dashboard for job seekers to search, filter, and apply to job openings based on skills, location, and preferences.",
      "Displaying personalized job recommendations based on user profile, resume, and job search history.",
      "Enabling job seekers to create, update, and manage their profiles, resumes, and cover letters directly from the dashboard.",
      "Offering real-time application tracking, showing the status of job applications and any updates from employers.",
      "Allowing users to set job alerts and receive notifications for new job postings that match their preferences.",
      "Supporting employer profiles and detailed job descriptions, including company insights, salary information, and work culture.",
      "Facilitating direct communication between employers and candidates through in-app messaging and interview scheduling features.",
      "Integrating career development resources such as resume-building tools, interview preparation guides, and skill assessments.",
      "Providing analytics on job search performance, such as profile views, application responses, and employer engagement."
    ],
  },
];

const projects = [
  {
    name: "E-Learning-plateform",
    description:
      "Transforming education in New York State with an intuitive platform for personalized learning and skill development. This platform acts as a digital gateway to a wide range of courses and learning tools, empowering students and professionals to track their progress and achieve their educational goals at their own pace",
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
    hosted_link: "https://e-learning-plateform-six.vercel.app/",
  },
  {
    name: "Dashboard",
    description:
      "Revolutionizing education in New York State with a user-friendly dashboard for personalized learning and performance tracking. Provides a digital gateway to a comprehensive range of courses and educational resources, enabling seamless progress monitoring and skill development for learners of all levels",
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
    hosted_link: "https://e-learning-plateform-admin.vercel.app/admin/dashboard",
  },
  {
    name: "Fitfolio app",
    description:
      "Revolutionizing health and fitness in New York State with a user-friendly mobile app for personalized workouts and progress tracking. Provides the digital gateway to comprehensive wellness programs, enabling users to monitor their fitness goals, track their activities, and improve their overall health with tailored plans.",
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
    hosted_link: "https://github.com/Anuragyadav622003/FitFolio-Health-Fitness-Tracker-app-android",
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
  name: "Anurag Yadav",
  fullName: "Anurag Yadav",
  email: "anuragyadav622003@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in 
  JavaScript, and expertise in frameworks like React.Js, React-naitve,
  Node.js, Express.js etc. I'm a quick learner and collaborate closely with clients to
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
      link: "https://www.linkedin.com/in/anurag-yadav-3704b1239/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Anuragyadav622003",
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
