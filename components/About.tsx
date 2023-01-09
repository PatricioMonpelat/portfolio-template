import React from "react";
import Image from "next/image";
import aboutPic from "../assets/img/guy.jpg";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo
};

export default function About({pageInfo}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='customTitle'>
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='-mb-20 mt-48 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      >
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          alt='thatGuy'
          width={224}
          height={224}
          className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
      </motion.div>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold mt-20'>
          Here is a{" "}
          <span className='underline decoration-[#14FFEC]/75'>little</span>{" "}
          background
        </h4>
        <p className='text-base'>
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
