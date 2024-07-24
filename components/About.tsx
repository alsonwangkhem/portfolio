"use client"

import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 lg:mb-3 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>    

        <div className='absolute top-50 mt-56 flex items-center flex-col md:flex-row max-w-7xl px-10 justify-evenly mx-auto'>
            <motion.img
            initial={{
                x: -200
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{ x:0 }}
            viewport={{once: true}}
            className='mt-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-100 md:h-100 xl:w-[500px] xl:h-[600px]'
            src="/aboutphoto.jpeg"
            />
            <div className='space-y-10 mt-2 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'><span className='underline decoration-[#F7AB0A]'>Alson</span> Wangkhem</h4>
                <p>
                    I&apos;m a 20 year old full stack developer, content creator and a college student. I believe in the power of code and content. I&apos;ve been creating full stack websites for over half a year now, mainly focussed on the MERN stack development, along with some DevOps skils. Recently, I am really interested in using several APIs like those of LangChan, OpenAI, PineCone, etc to take my full stack development skills to the next level. As for content creation, it&apos;s a hobby of mine to create content around mindfulness, productivity, motivation and help other people overcome struggles. I genuinely feel happy in providing value to the society and creating a positive impact in the lives of other people.
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default About