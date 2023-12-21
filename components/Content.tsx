'use client'

import { digitalImages } from '@/Constant/Data'
import SectionWrapper from '@/HOC/SectionWrapper'
import TextShowCase from '@/Utils/Motions/TextShowCase'
import { zoomIn } from '@/Utils/Motions/motion'
import {motion} from 'framer-motion'
import Image from 'next/image'

const Content = () => {
  return (
    <section className='relative min-h-screen justify-center flex items-center mt-[20rem]' id='create'>
        <div className='absolute'>
        <motion.video variants={zoomIn(0.99, 0.99)} autoPlay muted loop width="700" height="210"
       className="-z-50">
              <source src='/blackhole.webm' type="video/webm" />
             </motion.video>
        </div>

        <div className="absolute">

        <div className="md:w-[35rem] sm:w-[20rem] xm:w-[20rem] w-[15rem] md:h-[35rem] sm:h-[20rem] xm:h-[20rem] h-[15rem] rounded-[50%] border-gray-900 border-2 border-dashed flex justify-center items-center">
            <div className="md:w-[30rem] w-[15rem] sm:h-[30rem] h-[15rem] rounded-[50%] border-gray-900 border-2 border-dashed flex justify-center items-center">
                <div className="md:w-[25rem] w-[10rem] md:h-[25rem] h-[10rem] rounded-[50%] border-gray-900 border-2 border-dashed flex justify-center items-center">
                    <div className="md:w-[20rem] w-[5rem] md:h-[20rem] h-[5rem] rounded-[50%] border-gray-900 border-2 border-dashed flex justify-center items-center">
                        <div className="md:w-[15rem] w-[1rem] md:h-[15rem] h-[1ren] rounded-[50%] border-gray-900 border-2 border-dashed flex justify-center items-center">
                            <div className="md:w-[10rem] w-[0.5rem] md:h-[10rem] h-[0.5rem] rounded-[50%] border-gray-900 border-2 border-dashed flex justify-center items-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>


        <div className='flex justify-center flex-col items-center mt-11 z'>
            <TextShowCase fontSize='text-white sm:text-[2rem] xm:text-[1.2rem] text-[0.9rem] font-extrabold mt-4'>Get in a unique rare digital art</TextShowCase>
            <TextShowCase fontSize='sm:text-[1rem] xm:text-[0.8rem] text-[0.5rem] mt-4 text-slate-300 font-bold'>Let's start looking for something unique and limited art.</TextShowCase>
            <TextShowCase fontSize='sm:text-[1rem] xm:text-[0.8rem] text-[0.5rem] mt-4 text-slate-300 font-bold'>Have it the only one in the world</TextShowCase>
            <TextShowCase fontSize='button2___gradient xm:px-7 px-5 xm:py-5 py-3 mt-7 text-white font-bold rounded-md'>Get In Now</TextShowCase>
        </div>

        <div className=''>
            {digitalImages.map((item) => {
           return   <div className='absolute' key={item.id}>
                    <Image src={item.digitalIMG} alt='arts' width={1000} height={1000} className='object-cover w-8 h-8 rounded-[50%] border border-white' />
                </div>
            })}
        </div>
    </section>
  )
}

export default SectionWrapper(Content);