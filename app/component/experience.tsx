import React from "react";
import SectionTitles from "./sectionTitles";

const Experience = () => {
  const expirience = [
    {
      period: "2024 -> Present",
      work: "REMOTE",
      jobTitle: "Frontend Developer At NexGen",
      link: "https://nexgen.rw/",
      description:"Developing and maintaining responsive web applications with a focus on delivering exceptional user experiences. Leveraging modern frontend technologies to implement dynamic interfaces, state management, and component animations. Collaborating closely with cross-functional teams to ensure high-quality and scalable solutions.",
      technologies: ["Next Ts", "Context API","Redux Toolkit","Ant Design","Framer Motion","Tailwindcss",],
    },
    {
      period: "2023 -> 2024",
      work: "HYBRID",
      jobTitle: "Full-stack Software Developer at Uplus Mutual Partners",
      link: "https://uplus.rw/",
      description:
        "As a full-stack software developer, I worked on designing intuitive, user-friendly interfaces by conducting user research and creating wireframes and prototypes to improve user experiences. On the backend, I was responsible for developing robust applications and implementing RESTful APIs to optimize data handling and performance. I managed application state and database systems to ensure efficient data storage and retrieval. Additionally, I collaborated with cross-functional teams, maintained a clean and organized codebase, and documented code and APIs to support clear communication and ongoing development.",
      technologies: [
        "Javascript",
        "Typescript",
        "Tailwindcss",
        "React",
        "Next",
        "Redux Toolkit",
        "Node",
        "Nest",
        "TypeORM",
        "Redis",
        "MySQL",
      ],
    },
    {
      period: "2022 -> 2023",
      work: "REMOTE",
      jobTitle:
        "Full-stack Software Developer at Andela Technical Leadership Program",
      link: "https://rwanda.andela.com/",
      description:
        "At Andela, I immersed myself in various software development languages and technologies through comprehensive training. I excelled in writing efficient, testable code, collaborating within dynamic teams, and contributing to code documentation. I played a key role in release and sprint planning sessions, focusing on optimizing performance and enhancing user experience. Additionally, I wrote unit, integration, and end-to-end tests, implemented CI/CD pipelines to automate testing and deployment, managed code changes, and optimized both front-end and back-end performance for improved load times and responsiveness.",
      technologies: [
        "Html",
        "css",
        "scss",
        "Javascript",
        "Typescript",
        "React",
        "Redux",
        "Node",
        "Express",
        "MongoDB",
        "Postgress",
        "firebase",
        "AWS",
      ],
    },
    
  ];
  return (
    <div id="expirience" className="scroll-mt-28">
      <SectionTitles title={"Expirience"} />
      <div className="flex gap-4 flex-col">
        {expirience.map((job, index) => (
          <a href={job.link} target="_blank" rel="uplus.rw">
            <div
              key={index}
              className="py-4 px-2 group flex flex-col md:flex-row gap-8 hover:bg-gray-800 hover:backdrop-blur-3xl hover:shadow-md hover:shadow-orange-800 hover:rounded-lg "
            >
              <div className="flex flex-col gap-2 group-hover:text-orange-400">
                <span className="text-nowrap">{job.period}</span>
                <span>{job.work}</span>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <span className="group-hover:text-orange-400 group-hover:font-semibold cursor-pointer">
                    {job.jobTitle}
                  </span>
                  <span className="">{job.description}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 ">
                  {job.technologies.map((tec, index) => (
                    <div
                      key={index}
                      className="py-1 px-2 border border-gray-500 text-orange-400 rounded-md"
                    >
                      {tec}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Experience;
