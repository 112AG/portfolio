import React from "react";
import ahmedabadArtist from "../assets/cities/ahmedabadArtist.png";
import DelhiArtist from "../assets/cities/DelhiArtist.png";
import kolkataArtist from "../assets/cities/kolkataArtist.png";
import mumbaiArtist from "../assets/cities/mumbaiArtist.png";
import varanasiArtist from "../assets/cities/varanasiArtist.png";

function Experience() {
  const experiences = [
    {
      role: "ASSISTANT DESIGN MANAGER",
      company: "Adf Network Media",
      date: "Apr 2023 – Present",
      location: "Ahmedabad",
      icon: ahmedabadArtist,
      color: "text-yellow-400",
    },
    {
      role: "SR. GRAPHIC DESIGNER",
      company: "God Industries",
      date: "Mar 2022 – Apr 2022",
      location: "Delhi",
      icon: DelhiArtist,
      color: "text-cyan-400",
    },
    {
      role: "SR. GRAPHIC DESIGNER",
      company: "Arnlnl Textitools Pvt. Ltd.",
      date: "Dec 2020 – Mar 2022",
      location: "Kolkata, West Bengal",
      icon: kolkataArtist,
      color: "text-orange-400",
    },
    {
      role: "GRAPHIC DESIGNER",
      company: "Mansi Art & Company",
      date: "Oct 2019 – May 2020",
      location: "Mumbai, Maharashtra",
      icon: mumbaiArtist,
      color: "text-red-400",
    },
    {
      role: "ASSISTANT PHOTOGRAPHER",
      company: "Flury Fotd",
      date: "Apr 2018 – Jan 2019",
      location: "Varanasi, Uttar Pradesh",
      icon: varanasiArtist,
      color: "text-green-400",
    },
  ];
  return (
    <div className="three mt-12 py-12">
      {/* Heading */}
      <h1
        className="text-center font-extrabold leading-tight text-[30px] xs:text-[22px] sm:text-[53px] md:text-[62px] lg:text-[84px] xl:text-[94px] text-[#EEE6E2] mb-8 tracking-wide font-presser-bold"
        style={{ letterSpacing: "0.04em" }}
      >
        EXPERIENCE
      </h1>

<div className="relative xl:scale-110 max-w-4xl 2xl:max-w-7xl mx-auto mt-12 sm:mt-20">
  {/* Experience items */}
  <div className="flex flex-col gap-10 sm:gap-14 md:gap-16 lg:gap-20 mx-auto w-[90%] sm:w-[85%] md:w-[80%]">
    {experiences.map((exp, index) => (
      <div
        key={index}
        className="relative pl-12 sm:pl-16 md:pl-20"
      >
        {/* Landmark Icon */}
        <div className="absolute left-0 top-0 flex items-center justify-center w-10 sm:w-12 md:w-16">
          <img
            src={exp.icon}
            alt={exp.location}
            className="h-10 sm:h-12 md:h-16 lg:h-20 object-contain"
            loading="lazy"
          />
        </div>

        {/* Text Info */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-[40px] font-bold font-presser-bold">
            {exp.role}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base font-maisonneue-bold">
            {exp.company}{" "}
            <span className="text-gray-400">({exp.date})</span>
          </p>
          <p
            className={`${exp.color} text-xs sm:text-sm md:text-base font-semibold font-presser-bold`}
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
