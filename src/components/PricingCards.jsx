const PricingCards = () => {
  return (
    <>
      <div className='2xl:max-w-screen-2xl mx-auto relative'>
        <h1 className='font-header text-center text-5xl md:text-6xl lg:text-7xl font-black mb-32 text-secondary-200 dark:text-secondary-50 flex justify-center items-center'>
          Pricing
        </h1>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-6 -mt-24 bg-gradient-to-br from-secondary-50 to-primary-100 dark:from-gray-800 dark:to-primary-200 mx-5 md:mx-36 lg:mx-20 p-8 md:py-12 lg:py-14 rounded-xl mb-24'>
          <div className='w-full max-w-xs md:max-w-sm p-4 bg-secondary-50/90 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>
              Plus
            </h5>
            <div className='flex items-baseline text-secondary-200 dark:text-secondary-50'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>99</span>
              <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>
                /month
              </span>
            </div>
            <div>
              <p>
                Early Bird: <span className='font-black'>$39</span>/month
              </p>
            </div>
            <ul role='list' className='space-y-5 my-7'>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-100 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  AI-driven Mattress Recommendations
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-100 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Instant customer contact & chat summary relay
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-100 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  History of all Customer & Bot interactions with customer
                  contact details
                </span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>
                  Specific mattress recommendation from your “Inventory”
                </span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>
                  30-minute setup for inventory function
                </span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>
                  Full Customization (Company Logo, Branding, etc.)
                </span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>
                  Ongoing follow up and support
                </span>
              </li>
            </ul>
            <button
              type='button'
              className='text-secondary-50 bg-primary-200 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-200 dark:focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
              Coming Soon
            </button>
          </div>
          <div className='lg:scale-105 max-w-xs md:max-w-sm shadow-2xl w-full p-4 bg-secondary-50 border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>
              Prime
            </h5>
            <div className='flex items-baseline text-secondary-200 dark:text-secondary-50'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>
                239
              </span>
              <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>
                /month
              </span>
            </div>
            <div>
              <p>
                Early Bird: <span className='font-black'>$99</span>/month
              </p>
            </div>
            <ul role='list' className='space-y-5 my-7'>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Personalised AI-driven recommendations
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Instant customer contact & chat summary relay
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  History of all Customer & Bot interactions with customer
                  contact details
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Specific mattress recommendations based on “Inventory”
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  30-minute setup for inventory function
                </span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>
                  Full Customization (Company Logo, Branding, etc.)
                </span>
              </li>
              <li className='flex space-x-3 line-through decoration-gray-500'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500'>
                  Ongoing follow up and support
                </span>
              </li>
            </ul>
            <button
              type='button'
              className='text-secondary-50 bg-primary-200 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-200 dark:focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
              Coming Soon
            </button>
          </div>
          <div className='w-full max-w-xs md:max-w-sm p-4 bg-secondary-50/90 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>
              Premier
            </h5>
            <div className='flex items-baseline text-secondary-200 dark:text-secondary-50'>
              <span className='text-3xl font-semibold'>$</span>
              <span className='text-5xl font-extrabold tracking-tight'>
                549
              </span>
              <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>
                /month
              </span>
            </div>
            <div>
              <p>
                Early Bird: <span className='font-black'>$399</span>/month
              </p>
            </div>
            <ul role='list' className='space-y-5 my-7'>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Personalised AI-driven recommendations
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Instant customer contact & chat summary relay
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  History of all Customer & Bot interactions with customer
                  contact details
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Specific mattress recommendation from your “Inventory”
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  30-minute setup for branding
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Full Customization (Company Logo, Branding, etc.)
                </span>
              </li>
              <li className='flex space-x-3'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title>Check icon</title>
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'></path>
                </svg>
                <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
                  Ongoing follow up and support
                </span>
              </li>
            </ul>
            <button
              type='button'
              className='text-secondary-50 bg-primary-200 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-200 dark:focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>
              Coming Soon
            </button>
          </div>
        </div>
      </div>
      <div className='2xl:max-w-screen-2xl mx-auto'>
        <div className='flex flex-row justify-center items-center gap-6 mt-24 bg-gradient-to-br from-secondary-50 to-primary-100 dark:from-gray-800 dark:to-primary-200 mx-5 md:mx-20 py-14 rounded-xl mb-24'>
          <div className='flex justify-center items-center top-0 right-4'>
            <div className='bg-gray-800/60 border border-gray-200 rounded-lg shadow max-w-xs'>
              <div className='flex flex-col justify-center items-center my-8 text-white'>
                <svg
                  className='w-12 h-12 lg:w-24 lg:h-24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'></path>
                </svg>
                <div className="flex flex-col justify-center items-center">
                  <p className='text-center p-4 text-white text-s lg:text-xl font-semibold mx-6'>
                    Enterprise/E-Commerce
                  </p>
                  <p className="text-center text-xs lg:text-lg">Contact for details: blake@themattressai.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCards;
