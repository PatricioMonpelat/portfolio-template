import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='skillsmotion'
    >
      <h3 className='customTitle'>Skills</h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-[white]/30 text-sm'>
        Hover over a skill for percentage
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        
        {skills?.slice(0,skills.length / 2).map((skill)=>(
          <Skill key={skill._id} skill={skill}/>
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill)=>(
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}
        



        {/* <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill /> */}
      </div>
    </motion.div>
  );
}

export default Skills;
