"use client"
import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from './ui/lamp'


const Education = () => {
  return (
    <LampContainer>
        <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-7xl"
        id='contact'>
        Education: <br />
        <span className="text-center text-lg" id="education">
        <span className='sm:text-xl md:text-2xl lg:text-3xl'>M.Sc Computer Science</span> - Bishop&apos;s University, Canada<br/>
        <span className='sm:text-xl md:text-2xl lg:text-3xl'>B.Tech Computer Science</span> - GITAM University, India
        </span>
        </motion.h1>
  </LampContainer>
  )
}

export default Education