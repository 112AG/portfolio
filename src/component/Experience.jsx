import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ahmedabadArtist from "../assets/cities/ahmedabadArtist.png";
import DelhiArtist from "../assets/cities/DelhiArtist.png";
import kolkataArtist from "../assets/cities/kolkataArtist.png";
import mumbaiArtist from "../assets/cities/mumbaiArtist.png";
import varanasiArtist from "../assets/cities/varanasiArtist.png";
import line from "../assets/cities/artistLine.png";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const containerRef = useRef(null);

  const experiences = [
    {
      role: "ASSISTANT DESIGN MANAGER",
      company: "Adz Network Media (APR 2023 – Present) REMOTE",
      date: "Apr 2023 – Present",
      location: "Ahmedabad",
      icon: ahmedabadArtist,
      color: "text-yellow-400",
    },
    {
      role: "SR. GRAPHIC DESIGNER",
      company: "SBM Industries (Mar 2022 – Apr 2023)",
      date: "Mar 2022 – Apr 2022",
      location: "Delhi",
      icon: DelhiArtist,
      color: "text-cyan-400",
    },
    {
      role: "SR. GRAPHIC DESIGNER",
      company: "Adwell International Pvt. Ltd. (Jun 2020 – Mar 2022)",
      date: "Dec 2020 – Mar 2022",
      location: "Kolkata, West Bengal",
      icon: kolkataArtist,
      color: "text-orange-400",
    },
    {
      role: "GRAPHIC DESIGNER",
      company: "Imagine ART & Company (Feb 2019 – May 2020)",
      date: "Oct 2019 – May 2020",
      location: "Mumbai, Maharashtra",
      icon: mumbaiArtist,
      color: "text-red-400",
    },
    {
      role: "ASSISTANT PHOTOGRAPHER",
      company: "Filmy Foto (Apr 2018 – Jan 2019)",
      date: "Apr 2018 – Jan 2019",
      location: "Varanasi, Uttar Pradesh",
      icon: varanasiArtist,
      color: "text-green-400",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each experience item
      gsap.utils.toArray(".exp-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate connecting line progress (grow from top to bottom
       gsap.utils.toArray(".timeline-line").forEach((line, i) => {
      gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: "top center", opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
              start: "top 85%",
              end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="three mt-12 py-12 overflow-hidden">
      {/* Heading */}
      <h1
        className="text-center font-extrabold leading-tight text-[30px] sm:text-[53px] md:text-[62px] lg:text-[84px] xl:text-[94px] text-[#EEE6E2] mb-8 tracking-wide font-presser-bold"
        style={{ letterSpacing: "0.04em" }}
      >
        EXPERIENCE
      </h1>

      <div className="relative xl:scale-110 max-w-4xl 2xl:max-w-7xl mx-auto mt-12 sm:mt-20">
        {/* Vertical timeline line */}
        <div className="absolute left-[12%] top-[8%] w-[12px] h-[144px] bg-gradient-to-t from-[#0A0A0A] via-[#FFFFFF] to-[#0A0A0A] origin-top timeline-line"></div>
        <div className="absolute left-[12%] top-[30%] w-[12px] h-[144px] bg-gradient-to-t from-[#0A0A0A] via-[#FFFFFF] to-[#0A0A0A] origin-top timeline-line"></div>
        <div className="absolute left-[12%] top-[50%] w-[12px] h-[144px] bg-gradient-to-t from-[#0A0A0A] via-[#FFFFFF] to-[#0A0A0A] origin-top timeline-line"></div>
        <div className="absolute left-[12%] top-[70%] w-[12px] h-[144px] bg-gradient-to-t from-[#0A0A0A] via-[#FFFFFF] to-[#0A0A0A] origin-top timeline-line"></div>

        {/* Experience items */}
        <div className="flex flex-col gap-10 sm:gap-14 md:gap-16 lg:gap-20 mx-auto w-[90%] sm:w-[85%] md:w-[80%]">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-16 sm:pl-20 md:pl-24 exp-item"
            >
              {/* Landmark Icon */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-10 sm:w-12 md:w-16 flex-col">
                <img
                  src={exp.icon}
                  alt={exp.location}
                  className="h-10 sm:h-12 md:h-16 lg:h-20 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Text Info */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-[40px] font-bold font-presser-bold whitespace-nowrap">
                  {exp.role}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base xl:text-[20px] font-maisonneue-medium">
                  {exp.company}{" "}
                  {/* <span className="text-gray-400">({exp.date})</span> */}
                </p>
                <p
                  className={`${exp.color} text-xs sm:text-sm md:text-base xl:text-[16px] font-semibold font-presser-bold`}
                >
                  {exp.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
