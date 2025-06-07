import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import React from "react";

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0])

  //IMPORTANTE EL NOMBRE DE LA VARIABLE ES EL MISMO NOMBRE DE LA PROPIEDAD CSS QUE VA EN STYLE SI NO SE PUEDE HACER DE OTRA MANERA ASI OPACITY: VARIABLE

  return (
    <motion.div
      style={{ scale, rotate,opacity }}
      className="sticky top-0 h-screen w-screen bg-red-300 flex items-center justify-center"
    >
      <div>
        <h1>Hola Mundo</h1>
      </div>
    </motion.div>
  );
};
const Section2 = ({ scrollYProgress }) => {
 const scale = useTransform(scrollYProgress, [0.3, 0.55], [0.8, 1]);
   const opacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);
  return (
    <motion.div
      style={{ scale,opacity }}
      className="relative h-screen w-screen bg-blue-500 flex items-center justify-center"
    >
      <div>
        <h1>Fifi</h1>
      </div>
    </motion.div>
  );
};

const Section3 = ({scrollYProgress}) => {
const x = useTransform(scrollYProgress, [0.6, 0.8], [-100, 0]);
const opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);


  return (

    <motion.div 
    style={{opacity}}
    className="relative flex h-screen bg-white items-center justify-center">
      <div  className="flex ">
        <motion.h1 
         style={{x}}
        className="font-semibold text-black ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quo
          placeat, officia animi nam molestias dolor voluptatem rerum
          reprehenderit et cumque eum vitae repellendus illum nulla quisquam
          consectetur in aspernatur?
        </motion.h1>
      </div>
    </motion.div>
  );
};

const App = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={container}
      className="min-h-[200vh] relative flex flex-col bg-black  "
    >
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
      <Section3 scrollYProgress={scrollYProgress}/>
    </div>
  );
};

export default App;
