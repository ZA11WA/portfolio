import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
  {PROJECTS.map((project, index) => (
    <a
      href={project.githubLink} 
      target="_blank"
      rel="noopener noreferrer"
      key={index}
    >
      <div
        className="mb-8 flex flex-wrap lg:justify-center cursor-pointer  rounded-lg hover:shadow-lg transition-shadow duration-300"
      >
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          <img
            className="mb-6 rounded"
            src={project.image}
            width={150}
            height={150}
            alt={project.title}
          ></img>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 font-semibold underline">{project.title}</h6>
          <p className="mb-4 text-neutral-400">{project.description}</p>
          {project.technologies.map((tech, index) => (
            <span
              className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-sky-700"
              key={index}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </a>
  ))}
</div>

    </div>
  );
};

export default Projects;
