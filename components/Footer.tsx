'use client'

import { footer } from '@/Constant/Data'
import {motion} from 'framer-motion'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SectionWrapper from '@/HOC/SectionWrapper';
import { footerVariants } from '@/Utils/Motions/motion';

const Footer = () => {
  return (
    <motion.section variants={footerVariants} className="sm:mt-14 mt-0 sm:px-20 px-6 sm:py-24 py-8 text-white flex justify-between flex-col md:flex-row">
      <div>
        <h1 className="sm:text-4xl xm:text-3xl text-2xl font-semibold max-w-[300px] sm:py-0 py-6">Discover a rare abstract item around the world</h1>
      </div>

      <div className="flex flex-wrap gap-16 sm:py-1 py-6">
        {footer.map((item) => (
          <div key={item.head}>
            <h1 className='font-bold mb-9'>{item.head}</h1>
            <ul>
              {item.links.map((link) => (
                <li className='text-slate-400 leading-[30px]' key={link.link}>{link.link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="sm:py-0 py-6">
        <h1 className='text-2xl font-bold'>Joins Newsletter</h1>

        <p className='max-w-[300px] mt-10'>Subcribe our newsletter to get more amazing NFT's item</p>

        <div className="mt-6 border-2 rounded-[40px] px-4 flex items-center">
        <input type="email" placeholder='Enter Your Email' className='outline-0 p-2 bg-[#030014] w-full' />
        <KeyboardArrowRightIcon className=' bg-blue-600 rounded-[33px] text-black ml-7' />

        </div>
      </div>
    </motion.section>
  )
}

export default  SectionWrapper(Footer)