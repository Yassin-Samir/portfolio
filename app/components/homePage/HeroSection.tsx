import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Hero from "@/app/assets/hero.svg";
import Image from "next/image";
import { RiContactsFill } from "react-icons/ri";
import { MdDownload } from "react-icons/md";

function HeroSection() {
  return (
    <div
      className="w-full flex
    py-4 lg:py-12 lg:gap-12 gap-y-8  max-lg:flex-wrap-reverse"
    >
      <Image
        className="left-0 top-[-98px]  object-cover absolute -z-10"
        fetchPriority="high"
        src={Hero}
        alt="Hero"
        priority
      />
      <div className="">
        <h1
          className="text-3xl font-bold leading-10 text-white md:font-extrabold 
        lg:text-[2.6rem] lg:leading-[3.5rem]"
        >
          Hello, <br />
          This is <span className=" text-pink-500">Yassin Samir</span>, {"I'm"}{" "}
          a Professional{" "}
          <span className=" text-[#16f2b3]">Front-end Developer</span>{" "}
        </h1>
        <div className="my-8 flex items-center gap-5">
          <Link
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
            href={"https://github.com/Yassin-Samir"}
          >
            <BsGithub size={30} />
          </Link>
          <Link
            target="_blank"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
            href={"https://www.linkedin.com/in/yassin-samir/"}
          >
            <BsLinkedin size={30} />
          </Link>
        </div>
        <div className="flex gap-3 items-center justify-start">
          <Link
            href={"/#contactMe"}
            className="bg-gradient-to-r to-pink-500 from-violet-600 
            p-[1px] rounded-full transition-all 
            duration-300 hover:from-pink-500 hover:to-violet-600"
            role="button"
          >
            <button
              className="px-3 text-xs md:px-8 py-3 md:py-4 
            bg-[#0d1224] rounded-full border-none text-center md:text-sm 
            font-medium uppercase tracking-wider text-[#ffff] no-underline 
            transition-all duration-200 ease-out  md:font-semibold flex 
            items-center gap-1 hover:gap-3"
            >
              <span>Contact ME</span>
              <RiContactsFill size={16} />
            </button>
          </Link>
          <Link
            href={"/resume.pdf"}
            className="flex items-center gap-1 hover:gap-3 
            rounded-full bg-gradient-to-r from-pink-500 to-violet-600 
            px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm 
            font-medium uppercase tracking-wider text-white no-underline 
            transition-all duration-200 
          ease-out hover:text-white hover:no-underline md:font-semibold"
            target="_blank"
          >
            <span>Get Resume</span>
            <MdDownload size={16} />
          </Link>
        </div>
      </div>

      {/* Profile Card */}
      <div className="order-1 lg:order-2 w-full max-w-lg">
        <div className="relative bg-[#0d1224]/60 backdrop-blur-sm border border-[#1b2c68a0] rounded-2xl p-6 lg:p-8 shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-5 pb-5 border-b border-white/10">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full opacity-60 blur-sm"></div>
              <div className="relative h-20 w-20 rounded-full bg-[#0d1224] flex items-center justify-center border-2 border-[#1b2c68]">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">
                  YS
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Yassin Samir</h3>
              <p className="text-[#16f2b3] text-sm font-medium mt-1">
                Front-end Developer
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-gray-400">
                  Available for hire
                </span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-5">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Technologies I Work With
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Redux",
                "Express",
                "CSS",
                "HTML",
                "JavaScript",
                "Docker",
                "Google Cloud",
                "Firebase",
                "AWS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium text-white/90 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-5 bg-white/5 rounded-xl p-4 border border-white/5">
            <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
              <div className="px-2">
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="text-xs text-gray-400 mt-0.5">Years Experience</p>
              </div>
              <div className="px-2">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-xs text-gray-400 mt-0.5">Projects Built</p>
              </div>
              <div className="px-2">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-gray-400 mt-0.5">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
