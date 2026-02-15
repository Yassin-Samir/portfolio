import Link from "next/link";

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
    code: "https://github.com/insta-tutor/insta-tutor",
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
    name: "Portfolio",
    demo: "https://yassin-samir.vercel.app/",
    code: "https://github.com/Yassin-Samir/portfolio",
    tools: ["React", "Next.js", "vercel", "JavaScript", "css"],
    description: `My portfolio website`,
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
    <div className="z-[10] my-12 lg:my-24 relative" id="projects">
      <div className="">
        <div
          className="w-[80px] h-[80px] bg-violet-100 
      rounded-full absolute -top-[2.75rem] left-0 
      translate-x-1/2 filter blur-3xl opacity-30"
        ></div>
        <p className="absolute -top-[25px] left-0 bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          PROJECTS
        </p>
        <div className="w-full h-[2px] bg-[#1a1443]"></div>
      </div>
      <div
        className="pt-24 grid 
      md:grid-cols-[repeat(2,minmax(320px,1fr))] gap-6"
      >
        {projects &&
          projects.map((project, id) => (
            <div className="w-full h-full mx-auto max-w-2xl" key={id + 1}>
              <ProjectCard project={project} />
            </div>
          ))}
      </div>
    </div>
  );
}
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group h-full relative bg-[#0d1224]/60 border border-[#1b2c68a0] rounded-2xl overflow-hidden hover:border-violet-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 flex flex-col">
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Project Name & Role */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-500 transition-colors duration-300">
            {project.name}
          </h3>
          <p className="text-sm text-[#16f2b3] font-medium">{project.role}</p>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
            Built With
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs text-white/80 bg-white/5 border border-white/10 rounded-lg"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
          {project.code.toLowerCase() === "private" ? (
            <span className="text-gray-500 text-sm">Source Code Private</span>
          ) : (
            <Link
              href={project.code}
              target="_blank"
              className="text-white hover:text-pink-500 transition-colors duration-300 text-sm font-medium"
            >
              View Source Code →
            </Link>
          )}

          <Link
            href={project.demo}
            target="_blank"
            className="text-white hover:text-violet-400 transition-colors duration-300 text-sm font-medium ml-auto"
          >
            Live Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
