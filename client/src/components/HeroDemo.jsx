import { useState, useEffect } from 'react';

const HeroDemo = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='font-body'>
      <div className='bg-gradient-to-br from-secondary-50 to-primary-200 dark:from-gray-900 dark:to-primary-200 mx-5 lg:mx-20 flex flex-col lg:justify-center items-center h-[28rem] sm:h-[45rem] lg:h-[50rem] mt-10 rounded-xl shadow-2xl mb-24'>
      <h1 className="my-12 text-3xl md:text-5xl lg:text-7.5xl font-black text-secondary-200 dark:text-secondary-50 font-header">Sell Smarter, Sleep Better.</h1>
        <div className='mockup-window bg-primary-200 w-[88%] shadow-xl mb-4' style={{ transform: `translateY(-${offsetY * 0.5}px) scale(${1 + offsetY * 0.00075})` }}>
          <div className='px-4 py-2 bg-gray-700 flex justify-center items-center'>
            <img src="https://res.cloudinary.com/djr22sgp3/image/upload/v1687953607/dashboard-mockup-dark_b84y81.svg" className="bg-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDemo;
