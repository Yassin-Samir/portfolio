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
      <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>
        <div className="px-4 lg:px-8 py-5">
          <div className="flex flex-row space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
        </div>
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">coder</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{"{"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">Yassin Samir</span>
              <span className="text-gray-400">{`',`}</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className=" text-white">skills:</span>
              <span className="text-gray-400">{`['`}</span>
              <span className="text-amber-300">React</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">NextJS</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Redux</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Express</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">CSS</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">HTML</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Javascript</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Docker</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Google Cloud</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">Firebase</span>
              <span className="text-gray-400">{"', '"}</span>
              <span className="text-amber-300">AWS</span>
              <span className="text-gray-400">{"'],"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">
                quickLearner:
              </span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">
                problemSolver:
              </span>
              <span className="text-orange-400">true</span>
              <span className="text-gray-400">,</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                hireable:
              </span>
              <span className="text-orange-400">function</span>
              <span className="text-gray-400">{"() {"}</span>
            </div>
            <div>
              <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
              <span className="text-gray-400">{`(`}</span>
            </div>
            <div>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span className="mr-2 text-white">hardWorker</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span className="mr-2 text-white">problemSolver</span>
              <span className="text-amber-300">&amp;&amp;</span>
            </div>
            <div>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
              <span className="mr-2 text-white">skills.length</span>
              <span className="mr-2 text-amber-300">&gt;=</span>
              <span className="text-orange-400">5</span>
            </div>
            <div>
              <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
            </div>
            <div>
              <span className="text-gray-400">{`};`}</span>
            </div>
          </code>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
