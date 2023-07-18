import React from 'react';

const SignupForm = () => {
  return (
    <>
      <a
        href="http://eepurl.com/isHTp-/" target='_blank'
        className='lg:ml-10 bg-primary-200 hover:bg-green-500 active:bg-green-600 text-secondary-50 hover:shadow-green transition-all ease-in-out duration-300 p-2 px-8 rounded-xl lg:mt-8 mt-4'>
        <div className='flex flex-row gap-2 justify-center items-center lg:text-xl'>
          Subscribe
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
    </>
  );
}

export default SignupForm;
