import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='m-5 z-50 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[500px] xl:w-[700px] snap-center bg-[#292929] p-10 opacity-40 cursor-pointer transition-opacity hover:opacity-100 duration-200 overflow-hidden '>
        <motion.img 
        initial={{
            y: -100, 
            opacity: 0
        }}
        transition={{ duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className='w-32 h-32 rounded-full object-cover object-center'
        src="/headstarter.jpg" alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Software Engineering Fellow</h4>
            <p className='font-bold text-2xl my-2'>Headstarter AI</p>
            <div className='flex space-x-2 my-2'>
                <Image width={128} height={128} className='h-10 w-10 bg-white rounded-full' src="/nextjs.svg" alt="" />
                <Image width={128} height={128} className='h-10 w-10 bg-white rounded-full' src="/openai.svg" alt="" />
                <Image width={128} height={128} className='h-10 w-10 bg-white rounded-full' src="/firebase.png" alt="" />
                <Image width={128} height={128} className='h-10 w-10 rounded-full' src="/stripe.svg" alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>July 2024 - September 2024</p>
            <p className='space-y-4 text-lg z-60'>
               Built various AI Full Stack applications using APIs 
            </p>
        </div>
    </article>
  )
}

export default ExperienceCard