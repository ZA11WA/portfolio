import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Piotr_Zawidzki_zdj.jfif";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visable: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visable"
              className="pb-16 text-6xl font-thin  tracking-tight lg:mt-16 lg:text-8xl"
            >
              Piotr Zawidzki
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visable"
              className="bg-gradient-to-r from-sky-700 via-white to-sky-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visable"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8"> 
          <div className="flex justify-center ">
            <motion.img className="rounded-2xl brightness-75"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="piotrZawidzki"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
