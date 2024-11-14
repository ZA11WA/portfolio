
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visable: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Navbar = () => {
  return (
    <>
      <nav className=" mb-20 flex items-center justify-center py-6">
        {/* <div className="flex flex-shrink-0 items-center">
           <img className="mx-2 w-10" src={logo} alt="logo" /> 
        </div> */}
        <motion.div
          variants={container(0)}
          initial="hidden"
          animate="visable"
          className="m-8 flex items-center justify-center gap-5 text-4xl"
        >
          <a
            href="https://www.linkedin.com/in/piotr-zawidzki-30689a237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="cursor-pointer" />
          </a>
          <a
            href="https://github.com/ZA11WA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
