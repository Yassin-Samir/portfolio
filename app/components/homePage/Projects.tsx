import Link from "next/link";
import { Fragment } from "react";

interface Project {
  name: string;
  description: string;
  tools: string[];
  role: string;
  code: string;
  demo: string;
  image?: string;
}
const projects: Project[] = [
  {
    name: "ILS School",
    demo: "https://www.ils.school/",
    code: "Private",
    tools: ["React", "Firebase", "Next.js", "Material UI", "vercel"],
    description: `A school website which includes three departments: IGCSE,
American and National. Each school has its own set of data
such as: Events , graduate classes, vacancies ,academic
calendar, school sport stars, news. The backend used was
firebase and the next.js was selected as the front-end
framework. Material ui was chosen for the user interface. There
is also an admin panel version but this version is private`,
    role: "Front-end",
  },
  {
    name: "Insta-Tutor",
    demo: "https://www.insta-tutor.org/",
    code: "Private",
    tools: [
      "React",
      "Firebase",
      "Next.js",
      "Material UI",
      "vercel",
      "SendGrid",
      "Push Notifications",
    ],
    description: `A website for an EdTech startup which connects students and
teachers through answering question. I used next.js and
material ui for design and interactions. It included: credits
system , authentication ,responsive design , seo , role based
accessed data , push notifications , live chat system, online
presence , email notifications using sendGrid and pdf ocr for
IGCSE past papers. The backend used was google cloud.`,
    role: "Fullstack web developer",
  },
  {
    name: "Jewellery Store",
    demo: "https://full-eccomerce-app.vercel.app/",
    code: "https://github.com/Yassin-Samir/full-eccomerceApp",
    tools: ["React", "Firebase", "Next.js", "vercel", "stripe"],
    description: ` A demo jewelry e-commerce app which used react and
react-router-dom for front-end. It includes: demo stripe
intergration , authentication , order history, cart history and
responsive design. Technologies used : firebase for backend ,
vercel for hosting.`,
    role: "Front-end developer",
  },
  {
    name: "Messaging App",
    demo: "https://messaging-app-98837.firebaseapp.com/",
    code: "https://github.com/Yassin-Samir/messaging-app",
    tools: ["React", "Firebase", "vercel", "JavaScript", "css"],
    description: `Chat room`,
    role: "Front-end developer",
  },
];
function Projects() {
  return (
    <div
      className="relative z-[10] my-12 lg:my-24 
    border-solid border-[#1a1443] border-t-[2px]"
    id="projects"
    >
      <div
        className="w-[80px] h-[80px] bg-violet-100 
      rounded-full absolute -top-[2.75rem] left-0 
      translate-x-1/2 filter blur-3xl opacity-30"
      ></div>
      <p className="absolute -top-[25px] left-0 bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
        PROJECTS
      </p>
      <div className="py-24 flex flex-col gap-6">
        {projects &&
          projects.map((Project, id) => (
            <div
              className="w-full mx-auto max-w-2xl sticky"
              key={id + 1}
              style={{ top: `calc(${id + 1} * 4rem)` }}
            >
              <ProjectCard project={Project} />
            </div>
          ))}
      </div>
    </div>
  );
}
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{"{"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {project.tools.map((tag, i) => (
              <Fragment key={i}>
                <span className="text-amber-300">{tag}</span>
                {project.tools.length - 1 !== i && (
                  <span className="text-gray-400">{`', '`}</span>
                )}
                {project.tools.length - 1 === i && (
                  <span className="text-gray-400">{`'`}</span>
                )}
              </Fragment>
            ))}
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{" " + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Code:</span>{" "}
            {project.code.toLowerCase() === "private" ? (
              <span className="text-[#5f85ff]">{project.code}</span>
            ) : (
              <Link
                href={project.code}
                target="_blank"
                className="hover:underline text-[#5f85ff]"
              >
                {project.code}
              </Link>
            )}
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">demo:</span>{" "}
            <Link
              href={project.demo}
              target="_blank"
              className="hover:underline text-[#5f85ff]"
            >
              {project.demo}
            </Link>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="text-gray-400">{`};`}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default Projects;
