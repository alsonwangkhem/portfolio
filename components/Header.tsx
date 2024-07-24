"use client"

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex items-start sticky top-0 justify-between max-w-7xl mx-auto p-5 z-20 xl:items-center'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='flex flex-row items-center'>
            <SocialIcon url="https://twitter.com/AlsonWangkhem" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://www.linkedin.com/in/alsonwangkhem/" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://github.com/alsonwangkhem" fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://www.instagram.com/alsonwangkhem/" fgColor='gray' bgColor='transparent'/>
        </motion.div>
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='flex items-center cursor-pointer text-gray-500'>
                <SocialIcon href='#contact' network='email' fgColor='gray' bgColor='transparent'/>
                <a href='#contact' className='uppercase hidden md:inline-flex text-sm text-gray-500'>Contact Me</a>
        </motion.div>
    </header>
  )
}