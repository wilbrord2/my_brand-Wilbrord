import React from "react";
import SectionTitles from "./sectionTitles";

const Experience = () => {

  const expirience = [
    {
      period: "2023 -> Present",
      work: "HYBRID",
      jobTitle:
        "Full-Stack Software Developer | CRM Manager | Quality Assurance Lead – Uplus",
      link: "https://uplus.rw/",
      description:
        "Responsible for full-stack development, CRM management, and Quality Assurance at Uplus. Designed user interfaces, developed backend applications, implemented RESTful APIs, and optimized data handling. Managed application state and databases, collaborated with cross-functional teams, and maintained documentation.",
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
      period: "2025 -> 6 Months",
      work: "REMOTE",
      jobTitle: "Software Developer - Apertacura",
      link: "https://apertacura.com/",
      description:
        "Designed and maintained responsive web and mobile applications at Apertacura, focusing on user experience. Utilized modern frontend technologies for dynamic interfaces, state management, and animations. Collaborated with teams to deliver scalable, high-quality solutions.",
      technologies: [
        "React Native",
        "Expo",
        "Next Ts",
        "Context API",
        "Ant Design",
        "Framer Motion",
        "Tailwindcss",
      ],
    },
    {
      period: "2024 -> 2025",
      work: "REMOTE",
      jobTitle: "Software Developer | Quality Assurance Lead – NexGen",
      link: "https://nexgen.rw/",
      description:
        "Developed and maintained responsive web applications at NexGen, focusing on user experience with modern frontend technologies, dynamic interfaces, and state management. Collaborated with cross-functional teams to deliver scalable solutions.",
      technologies: [
        "Next Ts",
        "Context API",
        "Redux Toolkit",
        "Ant Design",
        "Framer Motion",
        "Tailwindcss",
      ],
    },
    {
      period: "2022 -> 2023",
      work: "REMOTE",
      jobTitle:
        "Full-stack Software Developer at Andela Technical Leadership Program",
      link: "https://rwanda.andela.com/",
      description:
        "Trained as a Full-stack Developer at Andela, working with multiple languages and technologies. Wrote efficient, testable code, contributed to documentation, and participated in release planning. Implemented CI/CD pipelines, managed code changes, and optimized performance across front-end and back-end.",
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


  // Removed unused experienceByJobTitle
  return (
    <section id="expirience" className="scroll-mt-28">
      <SectionTitles title={"Experience"} />
      <div className="flex gap-4 flex-col">
        {expirience.map((job, index) => (
          <article
            key={job.jobTitle + job.period}
            className="py-4 px-2 group flex flex-col md:flex-row gap-8 hover:bg-gray-800 hover:backdrop-blur-3xl hover:shadow-md hover:shadow-orange-800 hover:rounded-lg "
          >
            <div className="flex flex-col gap-2 group-hover:text-orange-400 min-w-[120px]">
              <span className="text-nowrap font-semibold">{job.period}</span>
              <span className="uppercase text-xs tracking-wide text-gray-400">{job.work}</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-2">
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-orange-400 group-hover:font-semibold cursor-pointer text-lg font-bold"
                >
                  {job.jobTitle}
                </a>
                <span className="text-gray-300 text-sm">{job.description}</span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.technologies.map((tec, techIdx) => (
                  <li
                    key={tec + techIdx}
                    className="py-1 px-2 border border-gray-500 text-orange-400 rounded-md text-xs font-mono"
                  >
                    {tec}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
