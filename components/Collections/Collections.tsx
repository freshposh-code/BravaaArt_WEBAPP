'use client'

import React, {useRef} from 'react'
import { collectionX1, collectionX2 } from '@/Constant/Data'
import TextShowCase from '../../Utils/Motions/TextShowCase'
import { useScroll, useTransform , motion} from 'framer-motion';
import NftCards from './NftCards';

const Collections = () => {
    const container = useRef(null);
const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
})

const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  return (
    <section ref={container} id='discover'>
        <div className="flex items-center justify-center mt-[24rem] m-6">
        <TextShowCase fontSize='text-white sm:text-[2.2rem] xm:text-[2rem] text-[1.7rem] font-bold'> <span className='sm:text-[2.4rem] text-[2rem] font-serif'>NFT</span> Collections</TextShowCase>
        </div>

          <div className="flex justify-center items-center m-6 text-xs">
        <TextShowCase fontSize='text-slate-300 sm:text-base text-[0.9em]'>Top collections over this last year you should look for</TextShowCase>
        </div>

        <div className="md:flex hidden flex-col overflow-x-hidden">

        <motion.div className="text-white flex gap-4 slider" style={{x: x1}}>
            {collectionX1.map((item) => (
                <div key={item.Desc} className='flex justify-center items-center'>
                       <h2 className='filter-dark p-5 rounded-[33px] font-semibold'>{item.Desc}</h2>
                </div>
            ))}
        </motion.div>


        <motion.div className="text-white flex mt-3 slider" style={{x: x2}}>
            {collectionX2.map((item) => (
                <div key={item.Desc} className='flex justify-center items-center'>
                       <h2 className='filter-dark p-5 rounded-[33px] font-semibold'>{item.Desc}</h2>
                </div>
            ))}
        </motion.div>
        </div>
       
       <NftCards />
    </section>
  )
}

export default Collections 