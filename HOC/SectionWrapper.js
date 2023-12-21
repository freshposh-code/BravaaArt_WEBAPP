import { staggerContainer } from "@/Utils/Motions/motion";
import { motion } from "framer-motion";

const SectionWrapper = (Component) => function HOC() {

  return (
     <>
     <motion.section initial='hidden'
   whileInView='show' 
   viewport={{once: true, amount: 0.15}}
   variants={staggerContainer} >
        <Component />
     </motion.section>
     </>
  )
}

export default SectionWrapper;
