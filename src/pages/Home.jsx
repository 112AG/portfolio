import React, { useRef } from "react";
import HeroOne from "../component/HeroOne";
import work from "../assets/artistrebelwork.webp";
import product from "../assets/artist-product.webp";
import work2 from "../assets/artistrebelworktwo.webp";
import HeroTwo from "../component/HeroTwo";
import Experience from "../component/Experience";
import Clip from "../component/Clip";
import Stickers from "../component/Stickers";
import Slide from "../component/Slide";
import artist from "../assets/artistmainimage.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const imgRef = useRef();
  const artistref = useRef();
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);

  useGSAP(() => {
    gsap.to(imgRef.current, {
      rotation: -360,
      duration: 12,
      ease: "none",
      repeat: -1,
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play pause resume pause",
      },
    });

    gsap.fromTo(
      artistref.current,
      {
        opacity: 0,
        y: 20,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );

    const updateNumber = (element, value) => {
      if (element) element.textContent = Math.round(value);
    };

    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 2 },
      scrollTrigger: {
        trigger: ".numStart",
        start: "top 40%",
        end: "bottom top",
        toggleActions: "play none none none",
      },
    });

    tl.to(
      { value: 0 },
      {
        value: 6,
        onUpdate: function () {
          updateNumber(num1Ref.current, this.targets()[0].value);
        },
        duration: 1.5,
      },
      0
    )
      .to(
        { value: 0 },
        {
          value: 100,
          onUpdate: function () {
            updateNumber(num2Ref.current, this.targets()[0].value);
          },
        },
        0
      )
      .to(
        { value: 0 },
        {
          value: 999,
          onUpdate: function () {
            updateNumber(num3Ref.current, this.targets()[0].value);
          },
          duration: 2.5,
        },
        0
      );
  }, []);

  return (
    <div className="overflow-x-hidden">
      <HeroOne />

      <div className="relative inline-block">
        <img src={work} alt="" />
        <img
          ref={imgRef}
          src={product}
          alt=""
          className="absolute h-[46%] bottom-[-4%] right-[18.5%]"
        />
        <img
          ref={artistref}
          src={artist}
          alt=""
          className="absolute h-[106%] top-2 md:top-4 left-[37%]"
        />
      </div>

      <HeroTwo />

      <div className="w-[80%] mx-auto">
        <h1 className="w-full break-words text-center font-extrabold leading-tight text-[30px] xs:text-[22px] sm:text-[53px] md:text-[62px] lg:text-[84px] xl:text-[94px] text-[#EEE6E2] mb-8 font-presser-bold">
          CLIENT OVERVIEW
        </h1>
        <div className="numStart relative">
          <img
            src={work2}
            alt="Background"
            className="object-cover object-center"
          />
          <div className="text-[#0a0a0a] text-center  absolute max-[320px]:bottom-[26.5%] max-[320px]:left-[14%] max-[1400px]:bottom-[28.5%] max-[1400px]:left-[15%] max-[2000px]:bottom-[26.5%] max-[2000px]:left-[13%] bottom-[26.5%] left-[13%] rotate-[17deg] max-[320px]:text-[14px] max-[500px]:text-[18px] max-[600px]:text-[22px] max-[800px]:text-[26px] max-[1000px]:text-[34px] max-[1200px]:text-[38px] max-[1400px]:text-[44px] max-[1800px]:text-[84px] max-[2000px]:text-[96px] min-[2000px]:text-[108px] font-presser-bold">
            <span ref={num1Ref}>0</span>
            <span>+</span>
          </div>
          <div className="text-[#0a0a0a] absolute max-[320px]:bottom-[21.5%] max-[320px]:left-[0%] max-[1400px]:bottom-[23.5%] max-[1400px]:left-[0%] max-[2000px]:bottom-[21.5%] max-[2000px]:left-[0%] bottom-[21.5%] w-full text-center max-[320px]:text-[14px] max-[500px]:text-[18px] max-[600px]:text-[22px] max-[800px]:text-[26px] max-[1000px]:text-[34px] max-[1200px]:text-[38px] max-[1400px]:text-[44px] max-[1800px]:text-[84px] max-[2000px]:text-[96px] min-[2000px]:text-[108px] font-presser-bold">
            <span ref={num2Ref}>0</span>
            <span>+</span>
          </div>
          <div className="text-[#0a0a0a] bg text-center absolute max-[320px]:bottom-[26.5%] max-[320px]:-right-[50%] max-[1400px]:bottom-[28%] max-[1441px]:right-[5%] max-[2400px]:-right-[50%] max-[2000px]:bottom-[26.5%] max-[2000px]:right-[6.5%] right-[8%] bottom-[26.5%] -rotate-[17deg] max-[320px]:text-[14px] max-[500px]:text-[18px] max-[600px]:text-[22px] max-[800px]:text-[26px] max-[1000px]:text-[34px] max-[1200px]:text-[38px] max-[1400px]:text-[44px] max-[1800px]:text-[84px] max-[2000px]:text-[96px] min-[2000px]:text-[108px] font-presser-bold">
            <span ref={num3Ref}>0</span>
            <span>+</span>
          </div>
        </div>
      </div>

      <Experience />

      <Slide />

      <Clip />

      <Stickers />
    </div>
  );
}

export default Home;
