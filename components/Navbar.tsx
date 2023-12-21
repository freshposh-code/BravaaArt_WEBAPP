'use client'

import { navbar } from "@/Constant/Data"
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import {navVariants} from '../Utils/Motions/motion'
import SectionWrapper from '../HOC/SectionWrapper'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const [color, setColor] = useState(false)

  const navColor = () => {
  if(window.scrollY >= 170) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  
  window.addEventListener('scroll' , navColor)
  
  return (
    <>
    <motion.section variants={navVariants}
    className={`sm:px-20 px-6 flex justify-between w-[100%] items-center sm:p-5 p-4 z-50 fixed top-0 ${color ? 'bg-[#000000bb]' : ''}`}>
      <div className="flex">
        <h1 className='text-slate-200 font-extrabold sm:text-[2rem] text-[1.4rem] cursive z-10'>BravaaArt</h1>
        </div>

        <ul className="gap-20 md:flex hidden z-10">
            {navbar.map((item) => (
              <li key={item.id} className={`text-white hover:border-b border-b-violet-800 hover:text-purple-600 duration-300 font-semibold`}>
                    <a href={item.id}> {item.name}</a>
                </li>
            ))}
        </ul>  

        {/* NAVBAR_MENU RESPONSIVENESS */}

        <div className="text-white md:hidden flex" onClick={() => setOpen((prev)=> !prev)}>
       { open ? <Close /> :  <MenuIcon />}
      
        <ul className={` ${open ? 'flex' : 'hidden'} absolute top-20 right-6 flex-col nav-gradient p-4 gap-5 rounded-e-[20%] sidebar z-20`}>
            {navbar.map((item) => (
              <li key={item.id} className={`text-white font-semibold xm:text-[1rem] text-[10px]`}>
                    <a href={item.id}> {item.name}</a>
                </li>
            ))}
        </ul>
        </div>
    </motion.section>
            <div className="gradient-01 h-20 absolute right-40 top-0" />
            </>
  )
}

export default SectionWrapper(Navbar) 