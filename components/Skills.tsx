"use client"

import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 lg:mb-3 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>    

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>
        <div className='absolute top-52 grid grid-cols-4 gap-5'>
            <Skill path="/icons/next.png" level='70%' directionLeft={true}/>
            <Skill path="/icons/nodejs.png" level='90%' directionLeft={true}/>
            <Skill path="/icons/tailwind.png" level='70%' directionLeft={true}/>
            <Skill path="/icons/html.png" level='90%' directionLeft={true}/>
            <Skill path="/icons/cloudflare.png" level='50%' directionLeft={true}/>
            <Skill path="/icons/js.png" level='90%' directionLeft={true}/>
            <Skill path="/icons/postgresql.png" level='70%' directionLeft={true}/>
            <Skill path="/icons/css.png" level='70%' directionLeft={true}/>
            <Skill path="/icons/github-logo.png" level='80%' />
            <Skill path="/icons/firebase.png" level='20%' />
            <Skill path="/icons/react.png" level='90%' />
            <Skill path="/icons/typescript.png" level='70%' />
            <Skill path="/stripe.svg" level='50%' />
            <Skill path="/icons/aws.png" level='50%' />
            <Skill path="/icons/docker.png" level='80%' />
            <Skill path="/icons/openai.png" level='20%' />
        </div>
    </motion.div>
  )
}

export default Skills