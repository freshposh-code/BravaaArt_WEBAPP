'use client'

import TextShowCase from '@/Utils/Motions/TextShowCase'
import { zoomIn } from '@/Utils/Motions/motion'
import {motion} from 'framer-motion'
import SectionWrapper from '@/HOC/SectionWrapper'
import { journey } from '@/Constant/Data'

const Journey = () => {
  return (
    <>
    <section className="mt-3 py-8 sm:px-20 px-6" id='community'>
      <div className='relative'>
      <div className='text-center flex justify-center items-center flex-col'>
        <TextShowCase fontSize='text-white font-extrabold sm:text-[2.3rem] xm:text-[1.7rem] text-[1.1rem]'>Our Roadmap</TextShowCase>
        <TextShowCase fontSize='text-slate-300 max-w-[470px] mt-6 xm:text-[1rem] text-[0.8rem]'>There is an important slogan in the crypto world you better understand:"your keys, your Bitcoin</TextShowCase>
      </div>
      <div className="flex justify-center items-center">
      <motion.video variants={zoomIn(0.99, 0.99)} autoPlay muted loop width="510" height="210"
       className="z-[-3000] absolute md:bottom-[-4rem] bottom-0">
              <source src='/blackhole.webm' type="video/webm" />
             </motion.video>
             </div>
             </div>

           <div className="w-full h-1 curvy mt-40 flex justify-between items-center">
            <span className='w-5 h-5 rounded-[50%] span'></span>
                {journey.map((item) => (
            <span className='w-5 h-5 rounded-[50%] span relative' key={item.date}>
              <div className='absolute sm:right-14 right-7'>
              <div className='absolute bottom-10'>
              <TextShowCase fontSize='text-white sm:text-[1rem] xm:text-[0.4rem] text-[0.3rem]'>{item.date}</TextShowCase>
              </div>
              <div className='absolute top-16'>
              <TextShowCase fontSize='text-white sm:text-[1rem] text-[0.4rem]'>{item.outcome}</TextShowCase>
              </div>
              </div>
                </span>
                ))}
            <span className='w-5 h-5 rounded-[50%] span'></span>
        </div>
    </section>
             </>
  )
}

export default SectionWrapper(Journey);