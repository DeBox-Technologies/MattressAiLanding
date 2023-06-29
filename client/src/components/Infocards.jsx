import { useEffect } from "react";
import { gsap } from "gsap";

const InfoCards = () => {
  useEffect(() => {
    gsap.set(".logo", { x: 215, y: 482 });
    gsap.set(".knot", { x: 22, y: 250 });
    gsap.set(".numTxt", { x: 22, y: 375 });
    gsap.set(".nameTxt", { x: 22, y: 410 });

    const centerMain = () => {
      gsap.set(".main", { x: "50%", y: "50%", transformOrigin: "center" });
    };
    centerMain();
    window.addEventListener("resize", centerMain);

    window.addEventListener("mousemove", (e) => {
      let winPercent = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
      let distFromCenter =
        1 -
        Math.abs(((e.clientX - window.innerWidth / 2) / window.innerWidth) * 2);

      gsap
        .timeline({ defaults: { duration: 0.5, overwrite: "auto" } })
        .to(".card", { rotation: -7 + 9 * winPercent.x }, 0)
        .to(".fillLight", { opacity: distFromCenter }, 0)
        .to(
          ".bg",
          { x: 100 - 200 * winPercent.x, y: 20 - 40 * winPercent.y },
          0
        );
    });

    gsap
      .timeline()
      .from(
        ".ball",
        {
          duration: 2,
          transformOrigin: "50% 50%",
          scale: 0,
          opacity: 0,
          ease: "elastic",
          stagger: 0.2,
        },
        0
      )
      .fromTo(
        ".card",
        {
          x: 200,
          y: 40,
          transformOrigin: "50% 50%",
          rotation: 0,
          skewX: 10,
          skewY: 4,
          scale: 2,
          opacity: 0,
        },
        {
          duration: 1.3,
          skewX: 0,
          skewY: 0,
          scale: 1,
          opacity: 1,
          ease: "power4.inOut",
        },
        0.2
      );
  }, []);

  return (
    <div className="h-screen flex items-center justify-center mx-20 bg-gradient-to-br from-secondary-200 to-primary-100 rounded-xl mb-80">
      <svg
        width='100%'
        height='100%'
      >
        <defs>
          <linearGradient id='grad2' x1='0%' y1='0%' x2='100%' y2='85%'>
            <stop offset='0%' stopColor='#4CA182' />
            <stop offset='80%' stopColor='#D2E7DF' />
          </linearGradient>
          <linearGradient id='grad3' x1='0%' y1='0%' x2='100%' y2='85%'>
            <stop offset='0%' stopColor='#116A7B' />
            <stop offset='80%' stopColor='#71B4B6' />
          </linearGradient>

          <pattern
            id='cardBg'
            x='0'
            y='0'
            width='100'
            height='100'
            patternUnits='userSpaceOnUse'
          >
            <image
              opacity='0.5'
              width='100'
              height='100'
              xlinkHref='https://assets.codepen.io/721952/whiteNoise2.png'
            />
            <image
              className='fillLight'
              opacity='0.5'
              width='100'
              height='100'
              xlinkHref='https://assets.codepen.io/721952/whiteNoise.png'
            />
          </pattern>

          <mask id='m'>
            <rect
              className='card'
              fill='#fff'
              width='340'
              height='540'
              rx='30'
              ry='30'
            />
          </mask>
        </defs>

        <g className='main'>
          <circle
            className='ball bg'
            fill='url(#grad2)'
            cx='120'
            cy='130'
            r='130'
          />
          <circle
            className='ball bg'
            fill='url(#grad3)'
            cx='550'
            cy='410'
            r='210'
          />
          <g className='blur' mask='url(#m)'>
            <image
              className='bg'
              x='33'
              y='7'
              width='700'
              height='600'
              xlinkHref='https://res.cloudinary.com/djr22sgp3/image/upload/v1688031512/bgBlur_wpeme9.webp'
            />
          </g>
          <g className='card'>
            <rect
              fill='none'
              stroke='#ccc'
              opacity='0.75'
              strokeWidth='3'
              width='341'
              height='541'
              rx='31'
              ry='31'
            />
            <rect
              fill='url(#cardBg)'
              width='340'
              height='540'
              rx='30'
              ry='30'
              opacity='0.8'
            />
            <text className='numTxt' fill='#f0f0f0' fontSize='23'>
              Wow Your Customers
            </text>
            <text className='numTxt' fill='#f0f0f0' fontSize='23'>
              Wow Your Customers
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default InfoCards;
