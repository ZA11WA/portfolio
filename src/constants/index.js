import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
I graduated from the Technical University of Bydgoszcz with a degree in Applied Computer Science, where I gained a solid foundation in software engineering, system design and problem solving. My passion for coding drives me to constantly expand my expertise through various personal projects, where I explore both front-end and back-end technologies. This hands-on experience allows me to understand the intricacies of full-stack development, from intuitive user interfaces to efficient, scalable back-end systems.

I bring a proactive approach to learning and a commitment to building software that solves real-world problems and makes an impact. As I continue to develop my technical skills, I am eager to contribute to complex, innovative projects where I can collaborate with others, take on new challenges, and grow into an even more versatile developer.
`;

export const ABOUT_TEXT = `Currently, I’m focused on growing my programming skills through hands-on projects and continuous learning. I’m drawn to challenges that push my limits and allow me to apply my knowledge in creative ways. When I’m not coding, you can find me exploring new tech trends, brainstorming project ideas, or collaborating with others who share a passion for innovation.

I’m excited to bring my dedication and curiosity to a role where I can contribute, learn, and grow alongside talented teams, working on projects that have a meaningful impact.`;

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
    description: "An application designed to help you discover your next favorite movie or TV series.",
    technologies: ["JS", "React", "Next.js", "TailwindCSS"],
    githubLink: "https://movie-page-one.vercel.app/",
  },
  
];

export const CONTACT = {
  address: "",
  phoneNo: "+48 737 745 518",
  email: "p.zawidzki665@gmail.com",
};
