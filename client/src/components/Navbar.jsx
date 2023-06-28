import { useEffect } from "react";

const Navbar = () => {

  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon"
    );
    const themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      themeToggleLightIcon.classList.remove("hidden");
    } else {
      themeToggleDarkIcon.classList.remove("hidden");
    }

    const themeToggleBtn = document.getElementById("theme-toggle");

    const handleThemeToggle = () => {
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    };

    themeToggleBtn.addEventListener("click", handleThemeToggle);

    return () => {
      themeToggleBtn.removeEventListener("click", handleThemeToggle);
    };
  }, []);

  return (
    <>
      <nav>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-9'>
          <a href='' className='flex items-center'>
            <img
              src='https://res.cloudinary.com/djr22sgp3/image/upload/v1687173679/mattress_ai_logo_circle_2_khzfpf.png'
              className='h-12 mr-3'
              alt='Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-secondary-200 dark:text-primary-50'>
              MattressAi
            </span>
          </a>
          <div className='flex flex-row items-center gap-3'>
                <button className='bg-primary-200 hover:bg-primary-200 text-secondary-50 p-2 px-4 rounded-xl mr-4'>
                  Launch App
                </button>
                <div className='border-l border-gray-900 dark:border-primary-50 pl-4'>
                  <button
                    id='theme-toggle'
                    type='button'
                    className='text-secondary-200 dark:text-secondary-50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl text-sm p-2'>
                    <svg
                      id='theme-toggle-dark-icon'
                      className='hidden w-5 h-5 md:w-6 md:h-6 align-middle'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                    </svg>
                    <svg
                      id='theme-toggle-light-icon'
                      className='hidden w-5 h-5 md:w-6 md:h-6 align-middle text-primary-50'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                        fillRule='evenodd'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
