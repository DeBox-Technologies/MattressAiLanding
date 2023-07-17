import SignupForm from './SignUpInput';

const NewsletterSignup = () => {
  return (
    <>
      <div className="2xl:max-w-screen-2xl mx-auto">
        <div className='flex flex-row justify-center items-center gap-6 mt-24 bg-gradient-to-br from-secondary-50 to-primary-100 dark:from-gray-800 dark:to-primary-200 mx-5 md:mx-20 py-14 rounded-xl mb-24'>
          <div className='flex flex-col justify-center items-center text-center gap-8 mx-5'>
            <h1 className='font-header text-3xl md:text-5xl lg:text-3xl font-black text-secondary-200 dark:text-secondary-50'>
              Stay up-to-date with MattressAi news and updates.
            </h1>
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterSignup;
