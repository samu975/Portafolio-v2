import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaJava,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiElixir,
  SiRuby,
  SiAngularjs,
  SiAdobexd,
} from "react-icons/si";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front-end Development",
        icons: [
          <FaHtml5 key={"fahtml"} />,
          <FaCss3 key={"facss"} />,
          <FaJs key={"fajs"} />,
          <FaReact key={"faReact"} />,
          <SiNextdotjs key={"sinext"} />,
          <SiAngularjs key={"siangular"} />,
          <FaWordpress key={"fawordpress"} />,
        ],
      },
      {
        title: "Back-end Development",
        icons: [
          <FaNodeJs key={"fanode"} />,
          <FaJava key={"fajava"} />,
          <FaPython key={"fapyth"} />,
          <SiRuby key={"siRuby"} />,
          <SiElixir key={"sielixir"} />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key={"fafigma"} />, <SiAdobexd key={"SiAdobe"} />],
      },
    ],
  },
  {
    title: "experiencia",
    info: [
      {
        title: "Full Stack Developer - Freelancer",
        stage: "2023 Febrero - Presente",
      },
      {
        title: "Back-end Developer - Kommit",
        stage: "2022 Agosto - 2023 Febrero",
      },
      {
        title: "Front-end Developer- Sapiencia",
        stage: "2022 Enero- 2022 Julio",
      },
      {
        title: "Intern Developer- CJT&T Ingenieria de software",
        stage: "2021 Febrero - 2021 Diciembre",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "Tecnólogo en Desarrollo de software - Universidad Digital de Antioquia",
        stage: "2022",
      },
      {
        title: "Énfasis en React + Next.js - Enyoy",
        stage: "2023",
      },
      {
        title: "Escuela de programación y desarrollo web - Platzi",
        stage: "2022",
      },
      {
        title: "Backend con Java y Spring Boot - One by Oracle",
        stage: "2021",
      },
      {
        title: "Curso de NesJS y Graphql - Udemy",
        stage: "2023",
      },
      {
        title: "Curso de javascript moderno - Udemy",
        stage: "2021",
      },
      {
        title: "Bootcamp de Elixir y Phoenix - Kommit",
        stage: "2022",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [hydrated, sethydrated] = useState(true);

  useEffect(() => {
    sethydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }
  return (
    <div className=" py-1 text-center xl:tex-left pb-10 xl:m-t-10 overflow-x-hidden min-h-[100vh]">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[150px]"
      >
        {/* {Image of something} */}
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 mt-24 md:mt-10 z-20 ">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col justify-center -mt-8"
        >
          <h2 className="h2 xl:mr-10">
            Captando <span className="text-accent">Historias</span>{" "}
            Conviertiendo <span className="">Sueños</span>
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            Soy Samuel Rosero, un apasionado desarrollador de software con una
            trayectoria impulsada por la creación de soluciones innovadoras. Con
            un historial probado como líder en proyectos, he colaborado con
            empresas tanto a nivel nacional como internacional.{" "}
            <span className="hidden xl:block">
              {" "}
              Mi enfoque no solo se centra en el desarrollo de aplicaciones,
              sino en la entrega de soluciones que impactan positivamente los
              objetivos empresariales.
            </span>
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] xl:h-[480px] mb-20"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, i) => {
              return (
                <div
                  className={`${
                    index === i &&
                    "text-accent after:w-[100%] after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(i)}
                  key={i}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 md:text-start"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div key={"-" + i} className="md:flex hidden">
                    -
                  </div>
                  <div>{item.stage}</div>
                  {/* {icons} */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div className="text-2xl text-white" key={iconIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
