const PricingCards = () => {

  return (
    <>
      <div>
        <h1 className="font-header text-7xl font-black mb-32 text-secondary-200 dark:text-secondary-50 flex justify-center items-center">Pricing</h1>
        <div className="flex flex-row justify-center items-center gap-6 -mt-24 bg-gradient-to-br from-secondary-50 to-primary-100 dark:from-gray-800 dark:to-primary-200 mx-20 py-14 rounded-xl mb-24">
          <div className="w-full max-w-sm p-4 bg-secondary-50/90 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Free Plan</h5>
              <div className="flex items-baseline text-secondary-200 dark:text-secondary-50">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">0</span>
                  <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="space-y-5 my-7">
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-100 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">1 team member</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-100 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-100 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">Setup Help</span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">Maintenance</span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
                  </li>
              </ul>
              <button type="button" className="text-secondary-50 bg-primary-200 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-200 dark:focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>
          <div className=" scale-105 shadow-2xl w-full max-w-sm p-4 bg-secondary-50 border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Business plan</h5>
              <div className="flex items-baseline text-secondary-200 dark:text-secondary-50">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">350</span>
                  <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="space-y-5 my-7">
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Setup help</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Maintenance</span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
                  </li>
              </ul>
              <button type="button" className="text-secondary-50 bg-primary-200 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-200 dark:focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>
          <div className="w-full max-w-sm p-4 bg-secondary-50/90 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Enterprise plan</h5>
              <div className="flex items-baseline text-secondary-200 dark:text-secondary-50">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">450</span>
                  <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="space-y-5 my-7">
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">4 team members</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Setup help</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Maintenance</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Complete documentation</span>
                  </li>
                  <li className="flex space-x-3">
                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-primary-200 dark:text-primary-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">24×7 phone & email support</span>
                  </li>
              </ul>
              <button type="button" className="text-secondary-50 bg-primary-200 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-200 dark:focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingCards
