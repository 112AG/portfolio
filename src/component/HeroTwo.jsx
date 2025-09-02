import React from "react";
import asain from "../assets/work/asain-paints.png";
import aster from "../assets/work/aster.png";
import nizwa from "../assets/work/bank-nizwa.png";
import blackberrys from "../assets/work/blackberrys.png";
import bmw from "../assets/work/BMW.png";
import clubmahindra from "../assets/work/clubmahindra.png";
import Dominos from "../assets/work/Dominos.png";
import geely from "../assets/work/geely.png";
import hughes from "../assets/work/hughes.png";
import iilm from "../assets/work/iilm.png";
import kfc from "../assets/work/kcf.png";
import Mandoobi from "../assets/work/Mandoobi.png";
import mazda from "../assets/work/mazda.png";
import muc from "../assets/work/muc.png";
import Muscat from "../assets/work/Muscat Univercity.png";
import ooredoo from "../assets/work/ooredoo.png";
import Parle from "../assets/work/parle.png";
import pind from "../assets/work/pind-balluchi.png";
import Polyglot from "../assets/work/Polyglot.png";
import rasbin from "../assets/work/rasbin.png";
import rhinoforce from "../assets/work/rhinoforce.png";
import rrl from "../assets/work/rrl.png";
import shalby from "../assets/work/shalby.png";
import skoda from "../assets/work/skoda.png";
import smartpig from "../assets/work/smart-pig.png";
import sultanmarket from "../assets/work/sultanmarket.png";
import Tally from "../assets/work/Tally.png";
import taximuscat from "../assets/work/taximuscat.png";

// Array of all images
const workImagesOne = [
  pind,
  Dominos,
  kfc,
  Parle,
  Tally,
  hughes,
  clubmahindra,
  blackberrys,
  Muscat,
];
const workImagesTwo = [
  muc,
  Polyglot,
  rasbin,
  nizwa,
  aster,
  shalby,
  sultanmarket,
  ooredoo,
  smartpig,
  geely,
];
const workImagesThree = [
  mazda,
  bmw,
  skoda,
  taximuscat,
  Mandoobi,
  asain,
  rrl,
  rhinoforce,
  iilm,
];

// Helper to repeat images for seamless scroll
const repeatImages = (arr, times = 2) => Array(times).fill(arr).flat();

function HeroTwo() {
  return (
    <div className="w-full overflow-hidden py-18">
      <h1 className="w-full break-words text-center font-extrabold leading-tight text-[30px] xs:text-[22px] sm:text-[53px] md:text-[62px] lg:text-[84px] xl:text-[94px] text-[#EEE6E2] mb-8">
        WORK WITH
      </h1>
      <div className="space-y-2 sm:space-y-6">
        {/* Layer 1: scroll right */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-2 sm:gap-4 animate-scroll-right" style={{ width: "max-content" }}>
            {[...workImagesOne, ...workImagesOne].map((img, idx) => (
              <div
                key={idx}
                className="bg-[#EEE6E2] rounded-xl flex items-center justify-center sm:w-36 sm:h-18 w-28 h-14 p-2 shadow-sm"
              >
                <img
                  src={img}
                  alt={`work-logo-one-${idx + 1}`}
                  className="object-contain max-h-full max-w-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Layer 2: scroll left */}
         <div className="overflow-hidden w-full">
          <div className="flex gap-2 sm:gap-4 animate-scroll-left" style={{ width: "max-content" }}>
            {[...workImagesTwo, ...workImagesTwo].map((img, idx) => (
              <div
                key={idx}
                className="bg-[#EEE6E2] rounded-xl flex items-center justify-center sm:w-36 sm:h-18 w-28 h-14 p-2 shadow-sm"
              >
                <img
                  src={img}
                  alt={`work-logo-two-${idx + 1}`}
                  className="object-contain max-h-full max-w-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Layer 3: scroll right (slower) */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-2 sm:gap-4 animate-scroll-right-slow"
            style={{ width: "max-content" }}
          >
            {repeatImages(workImagesThree).map((img, idx) => (
              <div
                key={`three-${idx}`}
                className="bg-[#EEE6E2] rounded-xl flex items-center justify-center sm:w-36 sm:h-18 w-28 h-14 p-2 shadow-sm"
              >
                <img
                  src={img}
                  alt={`work-logo-three-${idx + 1}`}
                  className="object-contain max-h-full max-w-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroTwo;
