import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const cardVariants = {
  offscreen: { y: "15%", x: "100%", scale: 0.5 },
  onscreen: {
    y: "0%",
    x: "0%",
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.9,
      duration: 0.1,
    },
  },
};

const svgVariants = {
  offscreen: { y: "15%", x: "100%", scale: 0.5 },
  onscreen: {
    y: "0%",
    x: "0%",
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.9,
      duration: 0.1,
    },
  },
};

const InfoCards = () => {
  const x = useMotionValue(window.innerWidth / 2);
  const y = useMotionValue(window.innerHeight / 2);

  const xRange = [window.innerWidth / 2 - 100, window.innerWidth / 2 + 100];
  const yRange = [window.innerHeight / 2 - 100, window.innerHeight / 2 + 100];

  const cardX = useTransform(x, xRange, ["-5px", "5px"]);
  const cardY = useTransform(y, yRange, ["-5px", "5px"]);

  const svgX = useTransform(x, xRange, ["-30px", "30px"]);
  const svgY = useTransform(y, yRange, ["-30px", "30px"]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  const stopTrackingRef = useRef(null); // Ref for the element that stops tracking
  const observerRef = useRef(null); // Ref for the intersection observer

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        // Stop tracking when the element is in view
        window.removeEventListener("mousemove", handleMouseMove);
      } else {
        // Resume tracking when the element is out of view
        window.addEventListener("mousemove", handleMouseMove);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (stopTrackingRef.current) {
      observerRef.current.observe(stopTrackingRef.current);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (observerRef.current && stopTrackingRef.current) {
        observerRef.current.unobserve(stopTrackingRef.current);
      }
    };
  }, [x, y]);

  return (
    <>
    <div className="mx-auto max-w-screen-2xl">
      <h1 className='font-header text-center text-4xl md:text-5xl lg:text-7xl font-black mb-24 text-secondary-200 dark:text-secondary-50 flex justify-center items-center'>
        Selling Sleep, Seamlessly.
      </h1>
      <div className='p-8 lg:p-16 mx-4 md:mx-5 lg:mx-20 my-5 bg-gradient-to-br from-secondary-50 to-primary-100 dark:from-gray-800 dark:to-primary-200 rounded-xl mb-36 flex justify-around items-center'>
        <motion.svg
          style={{
            x: svgX,
            y: svgY,
            transition: "transform .2s",
          }}
          variants={svgVariants}
          initial='offscreen'
          whileInView='onscreen'
          whileHover={{ scale: 1.05 }}
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute w-36 left-1 -mt-[200%] md:w-52 md:left-1 md:-mt-[60%] lg:w-72 lg:left-14 lg:-mt-[50%] 2xl:w-72 2xl:left-96 2xl:-mt-[30%]'>
          <defs>
            <linearGradient id='gradient' gradientTransform='rotate(45)'>
              <stop offset='0%' stopColor='#116A7B' />
              <stop offset='100%' stopColor='#4CA182' />
            </linearGradient>
          </defs>
          <circle cx='50' cy='50' r='50' fill='url(#gradient)' />
        </motion.svg>
        <motion.svg
          style={{
            x: svgX,
            y: svgY,
            transition: "transform .2s",
          }}
          variants={svgVariants}
          initial='offscreen'
          whileInView='onscreen'
          whileHover={{ scale: 1.05 }}
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute w-36 -right-14 mt-[190%] md:w-48 md:-right-16 md:mt-[50%] lg:w-64 lg:right-12 lg:mt-[48%] lg:z-50 lg:blur-sm 2xl:w-72 2xl:right-96 2xl:mt-[34%]'>
          <defs>
            <linearGradient id='gradient2' gradientTransform='rotate(45)'>
              <stop offset='0%' stopColor='#116A7B' />
              <stop offset='100%' stopColor='#71B4B6' />
            </linearGradient>
          </defs>
          <circle cx='50' cy='50' r='50' fill='url(#gradient2)' />
        </motion.svg>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-14 lg:mx-24'>
          <motion.div
            style={{ x: cardX, y: cardY, transition: "transform .2s" }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
            className='card bg-secondary-50/10 dark:bg-gray-900/30 backdrop-blur-md rounded-xl p-4 lg:p-8 transform transition-all ease-in-out duration-500 flex justify-center items-center text-center shadow-2xl'
            variants={cardVariants}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true }}
            animate={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}>
            <h2 className='text-2xl lg:text-4xl font-bold mb-2 text-secondary-200 dark:text-secondary-50'>
              Your Smart Mattress Sales Assistant
            </h2>
            <p className='text-sm lg:text-xl text-secondary-200 dark:text-secondary-50/80'>
              MattressAI simplifies mattress sales with advanced AI technology,
              it provides personalized recommendations based on your sleep
              preferences, body type, and budget, ensuring a comfortable and
              restful sleep experience tailored to your needs.
            </p>
          </motion.div>

          <motion.div
            style={{ x: cardX, y: cardY, transition: "transform .2s" }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
            className='card bg-secondary-50/10 dark:bg-gray-900/30 backdrop-blur-md rounded-xl p-4 lg:p-8 transform transition-all ease-in-out duration-500 flex justify-center items-center text-center shadow-2xl'
            variants={cardVariants}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true }}
            animate={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}>
            <img
              src='https://res.cloudinary.com/djr22sgp3/image/upload/v1688042717/people-01_nqfu4o.png'
              className='w-[65%] bg-secondary-100 pt-2 px-2 rounded-xl shadow-2xl'
            />
          </motion.div>
          <motion.div
            style={{ x: cardX, y: cardY, transition: "transform .2s" }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
            className='card hidden md:inline-block bg-secondary-50/10 dark:bg-gray-900/30 backdrop-blur-md rounded-xl p-4 lg:p-8 transform transition-all ease-in-out duration-500 text-center shadow-2xl'
            variants={cardVariants}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true }}
            animate={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}>
            <div className=' flex justify-center items-center'>
              <img
                src='https://res.cloudinary.com/djr22sgp3/image/upload/v1688044046/people-02_jpq4v3.png'
                className='w-[65%] bg-secondary-100 pt-2 px-2 rounded-xl shadow-2xl'
              />
            </div>
          </motion.div>
          <motion.div
            ref={stopTrackingRef}
            style={{ x: cardX, y: cardY, transition: "transform .2s" }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
            className='card bg-secondary-50/10 dark:bg-gray-900/30 backdrop-blur-md rounded-xl p-4 lg:p-8 transform transition-all ease-in-out duration-500 flex justify-center items-center text-center shadow-2xl'
            variants={cardVariants}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true }}
            animate={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}>
            <h2 className='text-2xl lg:text-4xl font-bold mb-2 text-secondary-200 dark:text-secondary-50'>
              Effortless advising, tailored to you.
            </h2>
            <p className='text-sm lg:text-xl text-secondary-200 dark:text-secondary-50/80'>
              MattressAI seamlessly integrates with our powerful dashboard,
              allowing you to upload new product catalogs with ease. Our AI will
              then analyze your customer{"'s"} preferences and recommend the
              best mattress for them.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default InfoCards;
