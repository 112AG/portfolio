import React from "react";
import jugadSpecialist from "../assets/stickers/jugadSpecialist.png";
import instagram from "../assets/stickers/instagram.png";
import whatsapp from "../assets/stickers/whatsapp.png";
import pinterest from "../assets/stickers/pinterest.png";
import youtube from "../assets/stickers/youtube.png";
import linkedin from "../assets/stickers/linkedin.png";
import designCardio from "../assets/stickers/designCardio.png";
import group126584 from "../assets/stickers/Group 126584.png";

function Stickers() {
  return (
    <div className="parent w-full max-w-[300px] sm:max-w-[640px] md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto overflow-hidden py-18 min-h-[188px] sm:min-h-[264px] relative flex flex-wrap justify-center items-center gap-6 p-4">
      <img
        src={jugadSpecialist}
        alt="Jugad Specialist"
        className="w-25 sm:w-36 md:w-40 lg:w-44 xl:w-44 h-auto transform rotate-12 absolute 
               bottom-16 sm:bottom-20 md:bottom-22 lg:bottom-20 xl:bottom-20 
               left-[5%] sm:left-[10%] md:left-[12.5%] lg:left-[16%] xl:left-[17%]"
      />

      <img
        src={instagram}
        alt="Instagram"
        className="w-24 sm:w-40 md:w-44 lg:w-48 xl:w-48 h-auto transform rotate-2 absolute 
               bottom-34 sm:bottom-36 md:bottom-42 lg:bottom-38 xl:bottom-37 
               left-[33.5%] sm:left-[32%] md:left-[32.5%] lg:left-[33%] xl:left-[32%]"
      />

      <img
        src={whatsapp}
        alt="WhatsApp"
        className="w-23 sm:w-40 md:w-44 lg:w-48 xl:w-48 h-auto transform absolute 
               bottom-24.5 sm:bottom-25 md:bottom-32 lg:bottom-30 xl:bottom-32 
               left-[43%] -rotate-8 sm:left-[49%] sm:-rotate-10 md:rotate-0 md:left-[52%] lg:left-[50.5%] xl:left-[47.5%]"
      />

      <img
        src={pinterest}
        alt="Pinterest"
        className="w-22 sm:w-36 md:w-40 lg:w-44 xl:w-44 h-auto transform absolute 
               bottom-20 sm:bottom-17.5 md:bottom-22.5 lg:bottom-22 xl:bottom-20
               left-[40%] sm:left-[48.5%] md:left-[47.5%] 2xl:-rotate-10 rotate-0 lg:left-[45.6%] xl:left-[45%]"
      />

      <img
        src={youtube}
        alt="YouTube"
        className="w-24 sm:w-40 md:w-44 lg:w-48 xl:w-48 h-auto transform rotate-2 absolute 
               bottom-0 sm:-bottom-2.5 md:-bottom-1.5 lg:-bottom-[10px] lg:rotate-10 xl:rotate-10 xl:-bottom-3
               left-[54%] sm:left-[48.5%] sm:rotate-10 md:rotate-0  md:left-[46%] lg:left-[46%] xl:left-[44%]"
      />

      <img
        src={linkedin}
        alt="LinkedIn"
        className="w-22 sm:w-40 md:w-44 lg:w-48 xl:w-48 h-auto transform -rotate-3 absolute 
               bottom-6 sm:bottom-2 md:bottom-3 lg:bottom-0 xl:bottom-0 
               left-[1%] sm:left-[6%] md:left-[8.5%] lg:left-[13.5%] xl:left-[15%]"
      />

      <img
        src={designCardio}
        alt="Design is My Cardio"
        className="w-30 sm:w-44 md:w-48 lg:w-54 xl:w-54 h-auto transform rotate-12 absolute 
               bottom-0.5 sm:bottom-0 md:bottom-0 lg:bottom-0 xl:bottom-0 
               left-[25%] sm:left-[27%] md:left-[28%] lg:left-[29%] xl:left-[29%]"
      />

      <img
        src={group126584}
        alt="Thinking 10% Clicking 90%"
        className="w-30 sm:w-44 md:w-48 lg:w-54 xl:w-54 h-auto transform -rotate-12 absolute 
               bottom-8 sm:bottom-0 md:bottom-0 lg:-bottom-4 xl:bottom-2 
               left-[64.5%] sm:left-[68%] md:left-[66.5%] md:rotate-10 lg:rotate-0 lg:left-[64%] xl:left-[60%]"
      />
    </div>
  );
}

export default Stickers;
