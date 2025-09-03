import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Slide() {

    const headRef = React.useRef();
   useGSAP(() => {
    let mm = gsap.matchMedia();

     mm.add(
      {
        // breakpoints
        isMobile: "(max-width: 768px)",
        isTablet: "(min-width: 769px) and (max-width: 1279px)",
        isLargeScreen: "(min-width: 1280px)",
      },
      (context) => {
        let { isMobile, isTablet, isLargeScreen } = context.conditions;

        gsap.to(headRef.current, {
          x: isMobile ? "-908%" : isTablet ? "-480%" : isLargeScreen ? "-280%" : "-150%",
          scrollTrigger: {
            trigger: ".page",
            start: "top 30%",
            end: "top -80%",
            scrub: 5,
            pin: true,
            markers: false,
          },
        });
      }
    );
  }, []);

  return (
    <div className='page'>
              <h1 ref={headRef} className="text-[120px] md:text-[200px] whitespace-nowrap text-[#696969] text-center mt-12 font-presser-bold">
        Building Brands, Designing Experiences.
      </h1>
    </div>
  )
}

export default Slide