import { useState, useEffect, useRef } from 'react';

const HeroDemo = () => {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef(null);
  const offsetDelay = 500; // Adjust the offset delay as needed

  const handleScroll = () => {
    const element = elementRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      const threeQuartersScreen = window.innerHeight * 0.02;
      if(rect.top <= threeQuartersScreen){
          const offset = Math.max(0, threeQuartersScreen - rect.top);
          setOffsetY(offset);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='font-body 2xl:max-w-screen-2xl mx-auto relative'>
      <div ref={elementRef} className='bg-gradient-to-br from-secondary-50 to-primary-200 dark:from-gray-900 dark:to-primary-200 mx-0 md:mx-5 lg:mx-20 flex flex-col lg:justify-center items-center h-[42rem] lg:h-[50rem] mt-10 rounded-xl shadow-2xl mb-24'>
      <h1 className="my-14 xl:my-16 pb-4 text-center mx-10 lg:mx-0 text-4xl md:text-4.5xl lg:text-7.5xl font-black text-secondary-200 dark:text-secondary-50 font-header">Automate your sale process.</h1>
        <div className='mockup-window -mr-36 md:mr-0 bg-primary-200 w-[88%] shadow-xl mb-4' style={{ transform: `translateY(-${offsetY * 0.5}px) scale(${1 + offsetY * 0.00075})` }}>
          <div className='px-4 py-2 bg-gray-700 flex justify-center items-center'>
            <img src="https://res.cloudinary.com/djr22sgp3/image/upload/v1688475339/Dashboard-Home_kzmzeq.png" className="bg-cover rounded-2xl mt-2" />
          </div>
        </div>
        <div className='mockup-window -ml-36 md:hidden bg-primary-200 w-[88%] shadow-xl mb-4' style={{ transform: `translateY(-${offsetY * 0.15}px) scale(${1 + offsetY * 0.00075})` }}>
          <div className='px-4 py-2 bg-gray-700 flex justify-center items-center'>
            <img src="https://res.cloudinary.com/djr22sgp3/image/upload/v1688475339/Dashboard-Home_kzmzeq.png" className="bg-cover" />
          </div>
        </div>
        <div className='absolute w-full hidden lg:inline-block'>
          <div className="absolute w-52 top-32 left-14 xl:w-64 xl:top-32 xl:left-14 p-6 bg-primary-200 border border-primary-50/10 rounded-xl shadow-2xl dark:border-gray-700" style={{ transform: `translateY(-${offsetY * 0.9}px) translateX(-${offsetY * 0.9}px) scale(${1 + offsetY * 0.00075})` }}>
              <svg className="w-10 h-10 mb-2 text-secondary-50" aria-hidden="true" fill="none" stroke='currentColor' strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <a href="#">
                  <h5 className="mb-2 text-lg xl:text-2xl font-semibold tracking-tight text-secondary-50 dark:text-white">Ready to revolutionize?</h5>
              </a>
              <p className="mb-3 font-normal text-secondary-50 text-md xl:text-xl">Try out MattressAi for yourself today.</p>
              <a href="https://dashboard.themattressai.com" className="text-md xl:text-xl inline-flex items-center text-secondary-50 hover:underline">
                  Explore our Ai
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDemo;
