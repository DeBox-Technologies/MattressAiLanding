import { useState, useEffect, useRef } from 'react';

const ProductShowcase = () => {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef(null);
  const offsetDelay = 500; // Adjust the offset delay as needed

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
    <div className='font-body 2xl:max-w-screen-2xl mx-auto lg:mt-8'>
      <div className='bg-secondary-50 dark:bg-gray-900 mx-5 lg:mx-20 drop-shadow-xl flex flex-col lg:flex-row lg:gap-14 justify-center items-center h-[45rem] lg:h-[42rem] mt-10 rounded-xl shadow-2xl mb-14 lg:mb-24'>
        <div className="flex justify-center lg:w-2/3 lg:pl-12">
          <div className='flex flex-col justify-center items-center lg:items-start'>
            <h1 className='lg:ml-10 pt-12 lg:pt-0 lg:py-2 text-left text-4xl lg:text-5xl xl:text-7 font-black text-secondary-200 dark:text-secondary-50 font-header'>
              Sell Smarter,
            </h1>
            <h1 className='lg:ml-10 text-left text-5xl lg:text-6xl xl:text-8xl font-black text-secondary-200 dark:text-secondary-50 font-header'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-primary-200 from-secondary-200 dark:to-primary-200 dark:from-secondary-50'>
                Sleep Better.
              </span>
            </h1>
            <h3 className='mx-12 lg:mx-16 text-center lg:ml-10 pt-4 lg:pt-8 lg:py-2 lg:text-left text-md lg:text-xl xl:text-2xl text-secondary-200 dark:text-secondary-50 font-black'>
              Supercharge your mattress sales and lead generation with AI.
            </h3>
            <h4 className='mx-12 lg:mx-16 text-center lg:ml-10 pt-4 lg:pt-4 lg:py-2 lg:text-left text-md lg:text-md xl:text-lg text-secondary-200 dark:text-secondary-50 font-extralight'>
              Join Mattress AI's Early Access today and lead the future of retail.
            </h4>
            <a
              href='http://eepurl.com/isHTp-/'
              className='lg:ml-10 bg-primary-200 hover:bg-green-500 active:bg-green-600 text-secondary-50 hover:shadow-green transition-all ease-in-out duration-300 p-2 px-8 rounded-xl lg:mt-8 mt-4'>
              <div className='flex flex-row gap-2 justify-center items-center lg:text-xl'>
                Sign Up
                <svg
                  aria-hidden='true'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 lg:w-6 lg:h-6 mt-1 hover:animate-pulse'>
                  <path
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                    strokeLinecap='round'
                    strokeLinejoin='round'></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div ref={elementRef} className='bg-gradient-to-br lg:scale-105 from-secondary-50 to-primary-200 dark:from-gray-900 dark:to-primary-200 shadow-2xl relative mt-4 lg:mt-0 w-full lg:w-1/2 h-full overflow-hidden rounded-xl flex justify-center items-center lg:items-end'>
          <img
            ref={elementRef}
            src='https://res.cloudinary.com/djr22sgp3/image/upload/v1688637645/MattressAiMockup_hgttzg.png'
            className='w-full h-full object-cover object-center lg:absolute lg:top-0 lg:z-10'
            style={{ transform: `scale(${1 + offsetY * 0.0001})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
