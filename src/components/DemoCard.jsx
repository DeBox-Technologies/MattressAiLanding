const DemoCard = () => {
  return (
    <>
      <div className='2xl:max-w-screen-2xl mx-auto'>
        <div className='flex flex-row justify-center items-center gap-6 mt-24 bg-gradient-to-br from-secondary-50 to-primary-100 dark:from-gray-800 dark:to-primary-200 mx-5 md:mx-20 py-14 rounded-xl mb-24'>
          <div className='flex justify-evenly items-center mx-5'>
            <div className='flex flex-col justify-center items-center gap-8 text-left w-1/2 px-14'>
              <h1 className='font-header text-3xl md:text-5xl lg:text-6xl font-black text-secondary-200 dark:text-secondary-50'>
                Want to demo{" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r to-primary-200 from-secondary-200 dark:to-primary-200 dark:from-secondary-50'>
                  MattressAi?
                </span>
              </h1>
              <h2 className='font-header text-md md:text-lg lg:text-xl text-secondary-200 dark:text-secondary-50 flex justify-center items-center lg:mr-24'>
                Scan the QR code here, or use the button to navigate to our Demo
                Chat.
              </h2>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <img src='https://res.cloudinary.com/djr22sgp3/image/upload/v1690732165/QRCode_1_ifaanj.png'
                className='w-4/5'
              />
              <a
                href='https://dashboard.themattressai.com/QRchat/aqGdItwBrCSptwEyPZe7Rd4YwiX2'
                className='w-4/5 bg-primary-200 hover:bg-green-500 active:bg-green-600 text-secondary-50 hover:shadow-green transition-all ease-in-out duration-300 p-2 px-8 rounded-xl lg:mt-8 mt-4'>
                <div className='flex flex-row gap-2 justify-center items-center lg:text-xl'>
                  Try Now
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
        </div>
      </div>
    </>
  );
};

export default DemoCard;
