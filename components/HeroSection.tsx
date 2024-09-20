'use client'

import SectionWrapper from '@/HOC/SectionWrapper'
import { motion } from 'framer-motion'
// import Image from 'next/image'
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import { feedbacks } from '@/Constant/Data';
import TextShowCase from '../Utils/Motions/TextShowCase'
import { fadeIn, zoomIn } from '@/Utils/Motions/motion';
import Image from 'next/image';

const HeroSection = () => {

  return (
    <section className='flex sm:flex-row flex-col'>
      <motion.section className='sm:px-20 px-6 sm:my-[10rem] my-28'>
        <div>
          <motion.h1 variants={fadeIn('up', 'tween', 0.45, 0.58)} className='text-white capitalize sm:text-[4rem] xm:text-[1.8rem] text-[20px] font-extrabold  z-10 sm:leading-[5.3rem] leading-[2.8rem]'>
            discover, collect, and <br /> sell extraordinary <br /> digital art <motion.div variants={fadeIn('right', 'tween', 0.80, 1.2)} className='curved-line sm:flex hidden' /></motion.h1>

          <motion.video variants={zoomIn(0.99, 0.99)} autoPlay muted loop width="650" height="320" className="absolute sm:top-[170px] top-[80px] left-0 z-[-2000]">
            <source src='/blackhole.webm' type="video/webm" />
          </motion.video>

          <motion.button variants={fadeIn('down', 'tween', 0.55, 0.88)} className='text-white mt-14 gradient sm:px-10 px-5 sm:py-5 py-3 rounded-[35px] font-semibold gap-1 items-center flex '>
            <AssistantDirectionIcon style={{ color: 'white' }} /> HIRE ME</motion.button>

          <div className='mt-14 flex sm:gap-20 gap-14 items-center flex-wrap'>
            {feedbacks.map((item, index) => (
              <div key={item.Desc}>
                <motion.div variants={fadeIn('down', 'tween', 0.65, index * 0.75)} className={`border ${index ? "border-violet-600" : "border-green-600"} mb-3`} />
                <motion.p variants={fadeIn('down', 'tween', index * 0.60, 0.45)} style={{ color: item.textColor, fontWeight: 700 }}>{item.Desc}</motion.p >
                <TextShowCase fontSize="text-white sm:text-[2rem] xm:text-[1.5rem] text-[1rem] font-bold mt-3">{item.Num}</TextShowCase>
              </div>
            ))}
          </div>
        </div>
        <div className="gradient-03 overflow-x-hidden" />


      </motion.section>
      <div>
        <Image src="/Bravaaa.png" alt='bravvaa' width={1000} height={1000} className='min-w-full object-cover' />
      </div>
    </section>
  )
}

export default SectionWrapper(HeroSection) 