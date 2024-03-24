"use client"
import { motion } from 'framer-motion';

const LetrasEffect = () => {
    
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, 
        transition: { duration: 0.5 } }
      }
    return (
        <div className="container flex gap-3 justify-center m-5">
        <motion.p className="font-light text-sm w-auto" variants={item} initial="hidden" animate="show">S E L E C C I O N E</motion.p>
        <motion.p className="font-light text-sm w-auto" variants={item} initial="hidden" animate="show">U N</motion.p>
        <motion.p className="font-light text-sm w-auto" variants={item} initial="hidden" animate="show">L E N G U A J E</motion.p>
      </div>
    );
  };

export default LetrasEffect