const NewsletterSignup = () => {
  return (
    <>
      <div className="2xl:max-w-screen-2xl mx-auto">
        <div className='flex flex-row justify-center items-center gap-6 mt-24 bg-gradient-to-br from-secondary-50 to-primary-100 dark:from-gray-800 dark:to-primary-200 mx-5 md:mx-20 py-14 rounded-xl mb-24'>
          <div className='flex flex-col justify-center items-center text-center gap-8 mx-5'>
            <h1 className='font-header text-3xl md:text-5xl lg:text-3xl font-black text-secondary-200 dark:text-secondary-50'>
              Stay up-to-date with MattressAi news and updates.
            </h1>
            <input
              type='text'
              placeholder='Enter your email'
              className='bg-secondary-50/40 dark:bg-gray-800 text-secondary-50 placeholder:text-center placeholder:text-secondary-200 dark:placeholder:text-secondary-50 w-[80%] rounded-xl'
            />
            <a
            href='https://dashboard.themattressai.com'
            className='bg-primary-200 hover:bg-green-600 text-secondary-50 p-2 px-8 rounded-xl'>
            <div className='flex flex-row gap-2 justify-center items-center'>
              Sign Up
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

export default NewsletterSignup;
