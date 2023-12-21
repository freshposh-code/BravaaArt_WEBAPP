import React, {useEffect, useRef} from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const TextShowCase = ({children, width= 'fit-content', fontSize}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation();
    const slideControl = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
            slideControl.start("visible")
            console.log('started')
        }
    }, [isInView])


  return (
    <div ref={ref} style={{position: 'relative', width, overflow:'hidden'}}>
        <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            // viewport={{once: false, amount: 0.20}}
            transition={{
                duration: 0.5, delay:0.40
            }}
        >
            <p className={`  ${fontSize} `}>{children}</p>
        </motion.div>

        <motion.div 
            variants={{
                hidden: {left: 0},
                visible: {left: '100%'},
            }}

            initial="hidden"
            animate={slideControl}
            // viewport={{once: false, amount: 0.20}}
            transition={{duration: 0.5, ease: 'easeIn'}}
            style={{
                position: 'absolute',
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: '#5421a5a9',
                zIndex: 20
            }}
        />


    </div>
  );
}

export default TextShowCase;