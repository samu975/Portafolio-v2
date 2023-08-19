import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-black/30 to-black/10 min-h-[100vh]">
      <div className="w-full h-full">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto xl:-pt-10">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            De la Imaginación al Código <br />{" "}
            <span className="text-accent">Dando Vida a tus Ideas </span>{" "}
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Visualiza un vínculo directo entre tus ideas más innovadoras y la
            materialización de esas visiones en el mundo digital. Trascenderemos
            las fronteras convencionales, convirtiendo la energía creativa en
            líneas de código que cobran vida.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-full min-h-[100vh] absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full min-h-[110vh] absolute mix-blend-color-dodge translate-z-0"></div>

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[537px] max-h-[478px] absolute -bottom-20 lg:bottom-10 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
