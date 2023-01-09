import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:patricio.monpelat@gmail?subject=${formData.subject}&body=hello, mi name is ${formData.name}.${formData.message} (${formData.email})`;
  };

  return (
    <motion.div className='contact-motion'>
      <h3 className='customTitle'>contact</h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font font-semibold text-center mt-32'>
          I have got just what you need.{" "}
          <span className='decoration-[#14FFEC]/50 underline'>
            {" "}
            Let&apos;s Talk.
          </span>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#14FFEC] h-7 w-7 animate-bounce' />
            <p className='text-2xl'>+968465465</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#14FFEC] h-7 w-7 animate-spin' />
            <p className='text-2xl'>team@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#14FFEC] h-7 w-7 animate-ping' />
            <p className='text-2xl'>123 Developer Lane</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto'
          >
            <div className='flex space-x-2'>
              <input
                {...register("name")}
                placeholder='Name'
                className='contactInput'
                type='text'
              />
              <input
                {...register("email")}
                placeholder='Email'
                className='contactInput'
                type='email'
              />
            </div>

            <input
              {...register("subject")}
              placeholder='Subject'
              className='contactInput'
              type='text'
            />

            <textarea
              {...register("message")}
              placeholder='Message'
              className=' text-black'
            />
            <button className='bg-[#14FFEC] py-5 px-10 rounded-md text-black font-bold text-lg'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
