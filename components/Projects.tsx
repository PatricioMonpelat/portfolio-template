import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='projects-motion'
    >
      <h3 className='customTitle'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#14FFEC] mt-32'>
        {projects?.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              width={500}
              src={urlFor(project?.image).url()}
              alt='mock'
              key={i}
            />

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#14FFEC]/50'>
                  Case Study {i + 1} of {projects.length}:{" "}
                </span>
                {project?.title}
              </h4>
              <div className='flex items-center space-x-2 justify-center'>
                {project.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    className='h-5 w-5'
                    src={urlFor(technology.image).url()}
                    width={40}
                    height={40}
                    alt='techused'
                  />
                ))}
              </div>

              <p className='text-sm text-center md:text-left'>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#14FFEC]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
}

export default Projects;
