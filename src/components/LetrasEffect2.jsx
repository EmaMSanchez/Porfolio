"use client"
import { motion } from 'framer-motion';

const LetrasEffect2 = () => {
    
    const item = {
        hidden: { opacity: 0 },
        show: {  opacity: 1, 
        transition: { duration: 0.5 } }
      }
    return (
        <div className="text-center items-center justify-center mt-10">
        <motion.p className='text-center w-auto' variants={item} initial="hidden" animate="show"> Estoy en busca de futuras oportunidades para contribuir con proyectos que desafíen e inspiren.</motion.p>
        <motion.p className='text-center w-auto' variants={item} initial="hidden" animate="show">Me entusiasma la posibilidad de trabajar con ustedes y llevar sus ideas al siguiente nivel.</motion.p>
        <motion.p className='text-center w-auto' variants={item} initial="hidden" animate="show"> ¡No dudes en ponerte en contacto!</motion.p>
        <motion.p className='text-center w-auto' variants={item} initial="hidden" animate="show"> ¡Hagamos que tu visión cobre vida en el mundo <span></span> digital!</motion.p>
      </div>
    );
  };

export default LetrasEffect2