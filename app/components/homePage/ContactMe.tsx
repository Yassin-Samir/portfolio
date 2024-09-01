import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
function ContactMe() {
  return (
    <div id="contactMe">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      <div className="flex flex-col gap-5 lg:gap-9 mt-8 pl-2">
        <p className="text-sm md:text-xl flex items-center gap-3">
          <MdAlternateEmail
            size={36}
            className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
          />
          <span>yassinex376@gmail.com</span>
        </p>
        <p className="text-sm md:text-xl flex items-center gap-3">
          <IoMdCall
            className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
            size={36}
          />
          <span>+201012672971</span>
        </p>
        <p className="text-sm md:text-xl flex items-center gap-3">
          <CiLocationOn
            className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
            size={36}
          />
          <span>Alexandria, Egypt</span>
        </p>
        <div className="mt-4 flex items-center gap-5 lg:gap-10">
          <Link target="_blank" href={"https://github.com/Yassin-Samir"}>
            <IoLogoGithub
              size={48}
              className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
            />
          </Link>
          <Link target="_blank" href={"https://www.linkedin.com/in/yassin-samir"}>
            <BiLogoLinkedin
              size={48}
              className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
