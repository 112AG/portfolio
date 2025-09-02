import React from "react";
import HeroOne from "../component/HeroOne";
import work from "../assets/artistrebelwork.webp";
import work2 from "../assets/artistrebelworktwo.webp";
import HeroTwo from "../component/HeroTwo";
import Experience from "../component/Experience";
import Clip from "../component/Clip";
import Stickers from "../component/Stickers";
import Slide from "../component/Slide";
function Home() {
  return (
    <div>
      <HeroOne />

      <div>
        <img src={work} alt="" />
      </div>

      <HeroTwo />

      <div className="w-[80%] mx-auto">
        <h1 className="w-full break-words text-center font-extrabold leading-tight text-[30px] xs:text-[22px] sm:text-[53px] md:text-[62px] lg:text-[84px] xl:text-[94px] text-[#EEE6E2] mb-8 font-presser-bold">
          CLIENT OVERVIEW
        </h1>
        <img src={work2} alt="" className="object-cover object-center" />
      </div>

      <Experience/>

      <Slide/>

      <Clip/>

      <Stickers/>
    </div>
  );
}

export default Home;
