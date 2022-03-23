/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji"

// Your Summary And Greeting Section

const greeting = {
  username: "Federico Conte Grand",
  title: "Hi all, I'm Federico Conte Grand",
  subTitle: emoji(
    "Full Stack Developer 👨‍💻 | Industrial Engineer 🔧 | React ⚛️ & Node 📡"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1yVmL-eVAap6IoJjfPSqdg5H7AX-suX9P/view?usp=sharing",
}

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/fedecontegrand",
  linkedin: "https://www.linkedin.com/in/federico-conte-grand",
  gmail: "fede.contegrand@gmail.com",
  //facebook: "https://www.facebook.com/bharat.kammakatla",
  twitter: "https://twitter.com/FedeConteGrand_",
}

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Develop of Web Applications, working with JavaScript based technologies. On both sides of web development, frontend and backend (I'm curious 🤷‍♂️), with my forte on React ⚛️.",
  //Using mainly React for UI and NodeJs for server development.",
  skills: [
    emoji(
      "⚡ Designing and developing intuitives UI using React, Redux, SASS, Chakra UI, etc.."
    ),
    emoji("⚡ Developing fast and reliables APIs with NodeJS and Express."),
    emoji("⚡ Communication to PostgreSQL's databases through Sequelize"),
    emoji("⚡ Focused on develop mantainable and clean code"),
  ],

  softwareSkills: [
    {
      skillName: "Javascript",
      classname: "logos:javascript",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "ReactJS",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "TypeScript",
      classname: "logos:typescript-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Redux",
      classname: "logos:redux",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "NodeJS",
      classname: "logos:nodejs",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Postgres",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Express",
      classname: "simple-icons:express",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Material UI",
      classname: "simple-icons:materialui",
      style: {
        backgroundColor: "white",
        color: "lightblue",
      },
    },
    {
      skillName: "Sass",
      classname: "simple-icons:sass",
      style: {
        backgroundColor: "transparent",
        color: "pink",
      },
    },
    {
      skillName: "Sequelize",
      classname: "logos:sequelize",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Chakra UI",
      classname: "simple-icons:chakraui",
      style: {
        backgroundColor: "transparent",
        color: "lightblue",
      },
    },
    {
      skillName: "Git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
}

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "Valienta (YC W20)",
      companylogo: require("./assets/images/valienta.png"),
      date: "Dec '21 – Mar '22 ",
      url: "https://valienta.com/",
      desc: "Working on company's products, developing User Interfaces with a strong brand design, and creating the best User experiences to our costumers.",
    },
    {
      role: "Full Stack Developer - E-commerce",
      company: "Henry Bootcamp",
      companylogo: require("./assets/images/henry.png"),
      date: "Aug '21 – Sep '21 ",
      url: "https://pf-vinos-ecommerce.vercel.app/",
      desc: "Participated on a agile-development team building a WineShop E-commerce with: CRUD of products , payment gateway, authentication, and much more...",
    },
    {
      role: "Full Stack Developer - Videogames App",
      company: "Henry Bootcamp",
      companylogo: require("./assets/images/henry.png"),
      date: "Jun '21 – Jul '21 ",
      url: "https://pi-videogames-ft14-a.vercel.app/",
      desc: "Individual proyect of an app that works with an Api an its own PostgreSQL's database.",
    },
    {
      role: "Intern",
      company: "Nodos App",
      companylogo: require("./assets/images/nodos.png"),
      date: "May - Jul '20",
      url: "https://e-nodos.com/",
      desc: "Experience on local EdTech startup, working doing client support and administration tasks, coached by the CEO of the startup. Assisted to tech conferences and job trainings.",
      descBullets: [],
    },
    // {
    //   role: "Administrative",
    //   company: "Bodega Conte Grand",
    //   companylogo: require("./assets/images/bodega1.jpg"),
    //   date: " '19 '20 '21 ",
    //   url: "http://bodegacontegrand.com/",
    //   desc: "Logistics, production control, providers support and legal tasks during harvest's periods.",
    // },
  ],
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
  display: true, // Set false to hide this section, defaults to true
}

// Your certifications

const certifications = {
  certifications: [
    {
      title: "Full Stack Web Developer",
      subtitle: "Henry Bootcamp",
      logo_path: "henry.png",
      certificate_link:
        "https://certificates.soyhenry.com/cert?id=b0bff806-a764-4072-8e40-96bcf30d16e5",
      alt_name: "Vskills",
      color_code: "#F6EAEA",
    },
    {
      title: "English EF SET",
      subtitle: "C1 - Advanced",
      logo_path: "ef.png",
      certificate_link: "https://www.efset.org/cert/jHhvGm",
      alt_name: "Experitest",
      color_code: "#F0FFDD",
    },
    // {
    //   title: "Python",
    //   subtitle: "- Jose Portilla",
    //   logo_path: "pierian-data-logo.png",
    //   certificate_link:
    //     "https://www.udemy.com/certificate/UC-a80d6e7c-e753-421d-bcee-5a7bc1769f28/",
    //   alt_name: "Pierian-Data",
    //   color_code: "#FEF6E6",
    // }
  ],
}

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.bharatkammakatla.com/selenium-python-automation-framework-how-to-build-cke5vij9p012h9ds1fsaocyax",
      title: "How to build a Selenium Python Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and python? If so, check out here !",
    },
    {
      url: "https://blog.bharatkammakatla.com/steps-to-build-a-selenium-java-framework-ckdsi73xg005ga9s1defhemfz",
      title: "Steps to build a Selenium Java Automation Framework",
      description:
        "Interested in building a test automation framework with selenium and java? If so, check out here !",
    },
    {
      url: "https://blog.bharatkammakatla.com/face-expression-recognition-using-keras-and-cnns-ckbevmufo0195dis1dfs10kt1",
      title: "Building a Machine Learning model to detect human emotions",
      description:
        "Are you interested to know how machines detect human emotions? If so, check out here !",
    },
    {
      url: "https://medium.com/@bharatkammakatla/basic-end-to-end-scikit-learn-workflow-cd9e9a50491b?source=friends_link&sk=b828ac262c172abd7508efcbd00e5bd3",
      title: "Basic End-to-End Scikit-Learn workflow",
      description:
        "Do you want to know how a basic end-to-end scikit-learn workflow is implemented ? If so, check out here !",
    },
  ],
}

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+54 264 510 0051",
  email_address: "fede.contegrand@gmail.com",
}

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
}
