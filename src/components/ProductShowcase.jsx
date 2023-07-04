const ProductShowcase = () => {
  return (
    <div className='font-body 2xl:max-w-screen-2xl mx-auto'>
      <div className='bg-gradient-to-br from-secondary-50 to-primary-200 dark:from-gray-900 dark:to-primary-200 mx-0 md:mx-5 lg:mx-20 flex flex-col lg:flex-row justify-center items-center h-[40rem] lg:h-[50rem] mt-10 rounded-xl shadow-2xl mb-24'>
        <div className='flex flex-col justify-center items-center lg:w-1/2'>
          <h1 className='pt-12 lg:pt-0 lg:py-10 text-left text-4xl lg:text-7.5xl font-black text-secondary-200 dark:text-secondary-50 font-header'>
            Sell Smarter,
          </h1>
          <h1 className='text-left text-4xl lg:text-7.5xl font-black text-secondary-200 dark:text-secondary-50 font-header'>
            Sleep Better.
          </h1>
          <button className='bg-primary-200 hover:bg-green-600 text-secondary-50 p-2 px-8 rounded-xl mt-14'>
            <div className='flex flex-row gap-2 justify-center items-center'>
              Try Today
              <svg
                aria-hidden='true'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4 mt-1'>
                <path
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  strokeLinecap='round'
                  strokeLinejoin='round'></path>
              </svg>
            </div>
          </button>
        </div>
        <div className='p-4 ml-2 md:ml-0 w-full lg:w-1/2 h-full overflow-hidden rounded-2xl'>
          <img
            src='https://res.cloudinary.com/djr22sgp3/image/upload/v1688478806/MattressAiMockup_nmb2sz.webp'
            className='w-full h-full object-cover object-center'
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
