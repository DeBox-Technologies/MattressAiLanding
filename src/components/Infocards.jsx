import { useState, useEffect, useRef } from 'react';

const InfoCards = () => {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef(null);

  const handleScroll = () => {
    const element = elementRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      const threeQuartersScreen = window.innerHeight * 0.1;
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
    <>
      <div className='mx-auto max-w-screen-2xl'>
        <div ref={elementRef} className='p-8 mb-36 xl:p-16 mx-4 md:mx-5 xl:mx-20 my-5 bg-gradient-to-br from-secondary-50 to-primary-100 dark:from-gray-800 dark:to-primary-200 rounded-xl'>
        <h1 className='font-header text-center text-4xl md:text-5xl lg:text-7xl font-black mb-14 lg:mb-24 text-secondary-200 dark:text-secondary-50 flex justify-center items-center'>
          Selling Sleep, Seamlessly.
        </h1>
          <div className='relative mx-auto border-gray-700 dark:border-gray-800 bg-gray-700 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]'>
            <div className='relative'>
              <img
                style={{ transform: `translateY(-${offsetY * 0.5}px) translateX(-${offsetY * 0.2}px) scale(${1 + offsetY * 0.00075})` }}
                src='https://res.cloudinary.com/djr22sgp3/image/upload/v1688042717/people-01_nqfu4o.png'
                className='absolute top-6 lg:top-12 -left-14 lg:-left-24 w-[30%] bg-secondary-200 pt-2 px-2 rounded-xl shadow-2xl'
              />
            </div>
            <div className='relative lg:hidden'>
              <img
                style={{ transform: `translateY(-${offsetY * 0.5}px) translateX(${offsetY * 0.2}px) scale(${1 + offsetY * 0.00075})` }}
                src='https://res.cloudinary.com/djr22sgp3/image/upload/v1688044046/people-02_jpq4v3.png'
                className='absolute top-24 -right-14 z-50 w-[30%] bg-secondary-200 pt-2 px-2 rounded-xl shadow-2xl'
              />
            </div>
            <div className='hidden lg:block relative'>
              <div
                style={{ transform: `translateY(-${offsetY * 0.5}px) translateX(${offsetY * 0.2}px) scale(${1 + offsetY * 0.00075})` }}
                src='https://res.cloudinary.com/djr22sgp3/image/upload/v1688042717/people-01_nqfu4o.png'
                className='absolute top-24 -right-48 w-1/2 z-50 bg-secondary-200 pt-2 px-2 rounded-xl shadow-2xl p-4'>
                <h2 className='text-md leading-1 lg:text-xl font-black mb-4 text-secondary-50 pt-4 px-4'>
                  Your Smart Mattress Sales Assistant
                </h2>
                <p className='text-xs lg:text-md text-secondary-50/70 px-4'>
                  MattressAI simplifies mattress sales with advanced AI
                  technology, it provides personalized recommendations based on
                  your sleep preferences, body type, and budget, ensuring a
                  comfortable and restful sleep experience tailored to your
                  needs.
                </p>
              </div>
            </div>
            <div className='rounded-xl overflow-hidden h-[140px] md:h-[262px]'>
              <video
                className='w-full h-full object-cover object-center'
                autoPlay
                loop
                muted
                playsInline
                src='https://res.cloudinary.com/djr22sgp3/video/upload/v1687277338/pexels-rostislav-uzunov-9150545-1920x1080-24fps_zsisxc.mp4'
              />
            </div>
          </div>
          <div className='relative mx-auto bg-gray-400 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]' />
          <div className='relative mx-auto bg-gray-500 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]' />
          <div className="lg:hidden p-8 my-5 bg-secondary-200 dark:from-gray-800 dark:to-primary-200 rounded-xl">
            <h2 className='text-xl leading-1 font-black mb-4 text-secondary-50'>
              Your Smart Mattress Sales Assistant
            </h2>
            <p className='text-sm text-secondary-50'>
              MattressAI simplifies mattress sales with advanced AI technology, it
              provides personalized recommendations based on your sleep
              preferences, body type, and budget, ensuring a comfortable and
              restful sleep experience tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCards;
