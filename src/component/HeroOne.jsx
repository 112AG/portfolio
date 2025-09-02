import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from "react-router-dom";

function HeroOne() {

      const textRef = useRef(null);
  const text = "ART DIRECTOR";

  const paraOneRef = useRef(null);
  const paraOne = `With 6+ years of experience and 100+ brands globally, I create unique, trend-driven designs across branding, advertising, web, and packaging. From Mumbai, Kolkata, Varanasi, and Delhi to Ahmedabad, my journey shapes designs that captivate and exceed expectations.`;

  const paraTwoRef = useRef(null);
  const paraTwo = ` Based in Ahmedabad, I work as an Assistant Design Manager at ADZ Network Media, a multinational design agency in Oman. I create impactful designs across branding, advertising, UI/UX, and packaging that resonate with audiences and build memorable brand identities`;

  useGSAP(() => {
    // ARTIST REBEL
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll("span");

      gsap.fromTo(
        letters,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.2,
          ease: "power3.out",
        }
      );
    }
    // PARAGRAGH ONE
    if(paraOneRef.current){
      const letters =  paraOneRef.current.querySelectorAll("span");

      gsap.fromTo(
        letters,
         {
          opacity: 0,
        },
        {
          
          opacity: 1,
          stagger: 0.02,
          duration: 0.05,
          ease: "power3.out",
        }
      );
    }

        // PARAGRAGH TWO
        if(paraTwoRef.current){
          const letters =  paraTwoRef.current.querySelectorAll("span");
    
          gsap.fromTo(
            letters,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              stagger: 0.015,
              duration: 0.05,
              ease: "power3.out",
            }
          );
        }
  }, []);


  return (
    <div className="w-full max-w-[1640px] mx-auto mb-12 px-4 sm:px-6 lg:px-10 pt-[96px] sm:pt-[128px] lg:pt-[142px]">
      {/* Heading */}
      <h1
        className="text-[32px] sm:text-[48px] md:text-[72px] lg:text-[96px] xl:text-[128px] font-700 text-center font-presser-bold leading-[1.1]"
        ref={textRef}
      >
        {text.split("").map((char, i) => (
          <span key={i} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* Content Flex */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-10 mt-6">
        {/* Paragraph One */}
        <p
          ref={paraOneRef}
          className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] w-full lg:w-1/2 text-left font-maisonneue-bold leading-relaxed"
        >
          {paraOne.split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>

        {/* Paragraph Two */}
        <p
          ref={paraTwoRef}
          className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] w-full lg:w-1/2 font-maisonneue-bold leading-relaxed"
        >
          {paraTwo.split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>

        {/* CTA Link */}
        <div className="w-full lg:w-auto flex justify-start lg:justify-end mt-6 lg:mt-0">
          <Link
            className="text-[14px] sm:text-[16px] border-b-[1.6px] font-maisonneue-bold whitespace-nowrap leading-[1.2]"
            to="/contact"
          >
            LET'S CONNECT{" "}
            <i className="ri-arrow-right-line" aria-label="arrow right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroOne;
