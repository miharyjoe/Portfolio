import React, { useRef } from "react";
import { useScroll, motion, spring } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, place, time, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: spring }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0  w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="2e année en licence informatique"
            time="2022-2023"
            place="Haute Ecole Informatique(HEI)"
            info=" Gestion d'équipe sur Jira en tant que PO
            Cloud computing : Amazon Web Services (AWS)
            Cours développement web : création site web , design
            Gestion de projet
            Cours API Rest : springboot, swagger, openAPI
            Cours Base de donnée: postgreSQL
            Test unitaire: Jest, Mocha Js, Junit"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
