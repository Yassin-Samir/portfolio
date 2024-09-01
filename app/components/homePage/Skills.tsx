"use client";
import Image from "next/image";
import SectionImage from "@/app/assets/section.svg";
import Marquee from "react-fast-marquee";
import { skill, skillsImage } from "@/app/utils/skill-image";
const skillsData: skill[] = [
  "gcp",
  "firebase",
  "javascript",
  "css",
  "html",
  "typescript",
  "git",
  "next js",
  "react",
  "docker",
  "vitejs",
  "tailwind",
  "materialui",
];
import "swiper/css";
function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="mx-auto -translate-y-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-3/4"></div>
      <Image
        className="absolute inset-0 -z-10"
        src={SectionImage}
        alt="Skills Section"
        priority
        fetchPriority="high"
      />

      <div
        className="my-5 lg:my-[3.25rem] flex 
      justify-center items-center "
      >
        <p className="relative z-10 bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          Skills
          <span
            className="absolute bg-[#1a1443]  
          h-[2px] w-60 -z-10 left-[-80%] top-1/2 "
          ></span>
        </p>
      </div>
      <Marquee
        className="w-full my-12 h-auto overflow-hidden"
        gradient={false}
        speed={80}
        pauseOnHover
        pauseOnClick
        delay={0}
        play
        direction="left"
      >
        {skillsData.map((skill, id) => (
          <div
            key={id + 1}
            className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
          >
            <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
              <div className="flex -translate-y-[1px] justify-center">
                <div className="w-3/4">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 p-6">
                <div className="h-8 sm:h-10">
                  <Image
                    src={skillsImage(skill)}
                    alt={skill}
                    width={40}
                    height={40}
                    loading="eager"
                    className="h-full w-auto rounded-lg"
                  />
                </div>
                <p className="text-white text-sm sm:text-lg">{skill}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Skills;
