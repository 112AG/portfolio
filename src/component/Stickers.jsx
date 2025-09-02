import React from 'react';
import jugadSpecialist from '../assets/stickers/jugadSpecialist.png';
import instagram from '../assets/stickers/instagram.png';
import whatsapp from '../assets/stickers/whatsapp.png';
import pinterest from '../assets/stickers/pinterest.png';
import youtube from '../assets/stickers/youtube.png';
import linkedin from '../assets/stickers/linkedin.png';
import designCardio from '../assets/stickers/designCardio.png';
import group126584 from '../assets/stickers/Group 126584.png';

function Stickers() {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden py-18 min-h-[300px] relative flex flex-wrap justify-center items-center gap-6 p-4 bg-transparent">
      <img src={jugadSpecialist} alt="Jugad Specialist" className="w-44 h-auto transform rotate-12 absolute bottom-20 left-[17%]" />
      <img src={instagram} alt="Instagram" className="w-48 h-auto transform rotate-2 absolute bottom-37 left-[32%]" />
      <img src={whatsapp} alt="WhatsApp" className="w-48 h-auto transform -rotate-4 absolute bottom-32 left-[47.5%]" />
      <img src={pinterest} alt="Pinterest" className="w-44 h-auto transform rotate-0 absolute bottom-26 left-[42.5%]" />
      <img src={youtube} alt="YouTube" className="w-48 h-auto transform rotate-2 absolute bottom-5.5 left-[46%]" />
      <img src={linkedin} alt="LinkedIn" className="w-48 h-auto transform -rotate-3 absolute bottom-0 left-[15%]" />
      <img src={designCardio} alt="Design is My Cardio" className="w-54 h-auto transform rotate-12 absolute bottom-0 left-[29%]" /> 
      <img src={group126584} alt="Thinking 10% Clicking 90%" className="w-54 h-auto transform -rotate-12 absolute bottom-2 left-[60%]" />
    </div>
  );
}

export default Stickers;