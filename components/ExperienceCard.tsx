/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[white]/10 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
        alt='experience1'
      />
      <div className=' px-0 md:px-10'>
        <h4 className='text-4xl font-light ml-3'>Lorem Ipsum</h4>
        <p className='font-bold text-2xl mt-1 ml-3'>Why do we use it</p>
        <div className='flex space-x-2 my-2 ml-3'>
          {experience.technologies.map((technology) => (
            <img
              key={technology?._id}
              src={urlFor(technology?.image).url()}
              className='h-10 w-10 rounded-full ml-2'
              alt='tech'
            />
          ))}

          {/* <img
            className='h-10 w-10 rounded-full ml-2'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
            alt='tech_1'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
            alt='tech_2'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
            alt='tech_3'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
            alt='tech_4'
          /> */}
        </div>
        <p className='uppercase py-5 text-[#00ADB5] ml-2'>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-4 ml-8 text-lg max-h-96 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#14FFEC]/80'>
          {experience.points.map((point, i)=>(
            <li key={i}>{point}</li>
          ))}
          {/* <li>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          </li>
          <li>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          </li>
          <li>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          </li>
          <li>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          </li>
          <li>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
          </li> */}
        </ul>
      </div>
    </article>
  );
}
