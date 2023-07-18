import SignupForm from './SignUpInput';

const NewsletterSignup = () => {
  return (
    <>
      <div className="2xl:max-w-screen-2xl mx-auto">
        <div className='flex flex-row justify-center items-center gap-6 my-12'>
          <div className='flex flex-col justify-center items-center text-center gap-2 mx-5'>
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
