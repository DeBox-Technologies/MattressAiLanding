import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InfoCards = () => {
  const cardRef = useRef();

  useEffect(() => {
    gsap.to(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true
      },
      x: "-50%"
    });
  }, []);

  return (
    <>
      <div className="flex flex-row gap-24 justify-center items-center">
        <div className="bg-secondary-50 dark:bg-gray-700 w-64 p-6 rounded-xl">
          <h1 className="font-header text-2xl text-secondary-100 dark:text-primary-200 font-bold">Wow Your Customers</h1>
          <p>
            Mattress.AI uses Artificial Intelligence to have a natural
            conversation with your customers about their mattress preferences.
            It then summarizes the conversation and sends you a text with the
            customers mattress needs as well as thier contact information.
          </p>
        </div>
        <div className="bg-secondary-50 dark:bg-gray-700 w-[30%] p-6 rounded-xl">
          <h1 className="font-header text-4xl text-secondary-100 dark:text-primary-200 font-bold mb-5">Wow Your Customers</h1>
          <p className="font-body text-xl text-gray-400 font-base">
            Mattress.AI uses Artificial Intelligence to have a natural
            conversation with your customers about their mattress preferences.
            It then summarizes the conversation and sends you a text with the
            customers mattress needs as well as thier contact information.
          </p>
        </div>
        <div className="bg-secondary-50 dark:bg-gray-700 w-64 p-6 rounded-xl">
          <h1 className="font-header text-2xl text-secondary-100 dark:text-primary-200 font-bold">Wow Your Customers</h1>
          <p>
            Mattress.AI uses Artificial Intelligence to have a natural
            conversation with your customers about their mattress preferences.
            It then summarizes the conversation and sends you a text with the
            customers mattress needs as well as thier contact information.
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoCards;
