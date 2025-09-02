import React from "react";
import Stickers from "../component/Stickers";
import number from "../assets/contact/artistrebelnumber.webp";
import email from "../assets/contact/artistrebelgmail.webp";
import location from "../assets/contact/artistrebelahemdabad.webp";
import tag from "../assets/contact/artistrebeltag.webp";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="h-full flex flex-col gap-24">
      <div className="contact-bg pt-[90px] xl:pt-[140px] min-h-[140vh] sm:min-h-[1249px] xl:min-h-[1680px]">
        <div className="w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-20 py-10">
          {/* Heading */}
          <h1 className="text-[38px] sm:text-[64px] xl:text-[84px] font-presser-bold font-extrabold text-black uppercase text-center leading-tight">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl 2xl:text-[28px] font-presser-bold font-bold text-black text-center mb-10">
            Ready to Make Your Brand Stand Out?
          </p>

          {/* Form */}
          <form className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm xl:text-[20px] text-[#131B23] font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full px-4 xl:px-8 xl:py-6 py-3 rounded-md bg-[#131B23] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm xl:text-[20px] text-[#131B23] font-semibold mb-2">
                Service
              </label>
              <input
                type="text"
                placeholder="What do you need help with?"
                className="w-full px-4  xl:px-8 xl:py-6 py-3 rounded-[6px] bg-[#131B23] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm xl:text-[20px] text-[#131B23] font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4  xl:px-8 xl:py-6 py-3 rounded-[6px] bg-[#131B23] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm xl:text-[20px] text-[#131B23] font-semibold mb-2">
                Budget
              </label>
              <input
                type="text"
                placeholder="Estimated Budget"
                className="w-full px-4 xl:px-8 xl:py-6 py-3 rounded-[6px] bg-[#131B23] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm xl:text-[20px] text-[#131B23] font-semibold mb-2">
                Phone Number (WhatsApp preferred):
              </label>
              <input
                type="tel"
                placeholder="+91"
                className="w-full px-4 xl:px-8 xl:py-6 py-3 rounded-[6px] bg-[#131B23] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm xl:text-[20px] text-[#131B23] font-semibold mb-2">
                Message
              </label>
              <input
                type="text"
                placeholder="Tell me about your project"
                className="w-full px-4 xl:px-8 xl:py-6 py-3 rounded-[6px] bg-[#131B23] text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          </form>

          {/* Submit Button */}
          <div className="mt-10 2xl:scale-140">
            <button
              type="submit"
              className="px-12 font-presser-bold py-4 bg-[#EE3C4B] text-white font-bold text-lg rounded-[6px] 
               hover:scale-105 transition-transform duration-300
               shadow-[0_6px_0_#0B0E14]"
            >
              Let’s Connect
            </button>
          </div>
        </div>
      </div>


      <div className="relative">
        <Link className="w-[436px] h-[130px] absolute -top-88 left-[8%]">
          <img src={number} alt="" />
        </Link>
        <Link className="w-[657.906px] h-[130px] absolute right-20 -top-48">
          <img src={email} alt="" />
        </Link>
        <Link className="w-[507.906px] h-[130px] absolute right-92 bottom-0">
          <img src={location} alt="" />
        </Link>
        <h1 className="text-[130px] text-center font-presser-bold">Thank You</h1>
<div className="w-full h-[45vh]">
  <div className="w-[655px] absolute left-1/2 -translate-x-1/2">
    <img src={tag} alt="" />
  </div>
</div>

      </div>
      <Stickers />
    </div>
  );
}

export default Contact;
