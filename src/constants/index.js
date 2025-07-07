import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `
I graduated from the Technical University of Bydgoszcz with a degree in Applied Computer Science, where I gained a solid foundation in software engineering, system design and problem solving. My passion for coding drives me to constantly expand my expertise through various personal projects, where I explore both front-end and back-end technologies. This hands-on experience allows me to understand the intricacies of full-stack development, from intuitive user interfaces to efficient, scalable back-end systems.

I bring a proactive approach to learning and a commitment to building software that solves real-world problems and makes an impact. As I continue to develop my technical skills, I am eager to contribute to complex, innovative projects where I can collaborate with others, take on new challenges, and grow into an even more versatile developer.
`;

export const ABOUT_TEXT = `I'm a passionate fullstack developer who thrives on turning ideas into reality through code. Currently focused on expanding my expertise through hands-on projects and continuous learning, I embrace challenges that push my boundaries and allow me to apply knowledge in innovative ways.

My specialization lies in crafting modern, accessible, and responsive web applications using cutting-edge technologies like React, Next.js, and Node.js. I take pride in delivering fullstack solutions that prioritize usability, performance, and clean architecture—always adhering to industry best practices including WCAG accessibility standards and responsive web design principles.

My development experience spans agile methodologies such as Scrum and Waterfall, ensuring I can adapt to various team dynamics and project requirements. I believe in writing code that not only works but is maintainable, scalable, and makes a meaningful impact.

Beyond the keyboard, you'll find me exploring emerging tech trends, brainstorming innovative side projects, or collaborating in hackathons and freelance opportunities. I'm driven by continuous improvement and excited to contribute to teams where collaboration, learning, and shared innovation create exceptional digital experiences.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2024",
    role: "Junior Network Engineer Developer",
    company: "Łączpol/Nokia",
    description: `As a Junior Network Engineer, my responsibilities include the
configuration, maintenance and monitoring of computer networks,
ensuring the stability and performance of the network infrastructure.
In addition, I actively learn from senior colleagues, developing my
skills in the area of network solution design and implementation.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Self-Taught Developer",
    company: "Own projects",
    description: `I create applications on my own for the purpose of developing my programming skills. I use tools such as TypeScript, Next.js, MongoDB and Node.js to develop my expertise in developing full web applications. I design and implement both frontend and backend, integrating APIs with databases. This allows me to better understand the entire application building process and keep my skills up to date with modern technologies.`,
    technologies: ["TypeScript", "Next.js", "MongoDB", "Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, user authentication and admin dashboard.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    githubLink: "https://watch-shop-test.vercel.app/",
  },
  {
    title: "Movies App",
    image: project2,
    description:
      "An application designed to help you discover your next favorite movie or TV series.",
    technologies: ["JS", "React", "Next.js", "TailwindCSS"],
    githubLink: "https://movie-page-one.vercel.app/",
  },
  {
    title: "InfoHero",
    image: project5,
    description:
      "Project created as part of the 8th Bydgoszcz Hackathon. It presents a news portal fighting fake news. Users can upload news and rate their credibility, and the best ones become ‘credibility heroes’. It uses two artificial intelligence models - one to detect hate speech and the other to detect basic fake news.",
    technologies: ["AI", "TypeScript", "React", "Python"],
    githubLink: "https://github.com/ZCodeHackathon/InfoHero",
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "+48 737 745 518",
  email: "p.zawidzki665@gmail.com",
};
