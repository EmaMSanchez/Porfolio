"use client"
import { motion } from 'framer-motion';

const MovimientoEffect = () => {
    return (
        <motion.div className="container flex gap-2 w-auto h-auto justify-center">
          <motion.div
            className="mt-[-40px] container w-[150px] h-[200px]  md:w-[300px] md:h-[440px] bg-cover sombra"
            style={{ backgroundImage: `url(/aa3.jpg)` }}
            initial={{ y: 100, opacity: 0 }} // Cambia a un valor negativo para mover de abajo hacia arriba
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .5 }}
          />
          <motion.div
            className="mt-[20px] container w-[150px] h-[200px]  md:w-[300px] md:h-[440px]  bg-cover sombra"
            style={{ backgroundImage: `url(/Imagen3.jpg)`, backgroundPosition: 'center' }}
            initial={{ y: -100, opacity: 0 }} // Cambia a un valor negativo para mover de abajo hacia arriba
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .5 }}
          />
        </motion.div>
      );
  };

export default MovimientoEffect