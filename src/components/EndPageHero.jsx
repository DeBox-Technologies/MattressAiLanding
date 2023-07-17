const EndPageHero = () => {
  return (
    <>
      <div className="2xl:max-w-screen-2xl mx-auto">
        <div className='flex flex-row justify-center items-center gap-6 mt-24 bg-gradient-to-br from-secondary-50 to-primary-100 dark:from-gray-800 dark:to-primary-200 mx-5 md:mx-20 py-14 rounded-xl mb-24'>
          <div className='flex flex-col justify-center items-center text-center gap-8 mx-5'>
            <h1 className='font-header text-3xl md:text-5xl lg:text-6xl font-black text-secondary-200 dark:text-secondary-50'>
              Sleep is life. Let AI help  <span className="text-transparent bg-clip-text bg-gradient-to-r to-primary-200 from-secondary-200 dark:to-primary-200 dark:from-secondary-50">optimize</span>  it.
            </h1>
            <h2 className='font-header text-md md:text-lg lg:text-xl text-secondary-200 dark:text-secondary-50 flex justify-center items-center'>
              Mattress shopping can be such a hassle, but with Mattress.AI it is more like a fun conversation.
            </h2>
            <a
            href='https://dashboard.themattressai.com'
            className='bg-primary-200 hover:bg-green-600 text-secondary-50 p-2 px-8 rounded-xl'>
            <div className='flex flex-row gap-2 justify-center items-center'>
              Get started Today
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
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndPageHero;
