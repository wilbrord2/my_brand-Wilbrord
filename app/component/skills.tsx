import React from "react";
import SectionTitles from "./sectionTitles";
import { Icon } from "@iconify/react/dist/iconify.js";

const Skills = () => {
  const handleExpirienceYear = (year: number) => {
    return new Date().getFullYear() - year;
  };

  const skills = [
    {
      name: "Quality Assurance",
      icon: "material-symbols-light:security",
      description:
        "Proficient in designing and executing test plans, automating test cases, and ensuring software reliability through rigorous QA processes.",
      tags: ["Jest", "Postman", "Selenium"],
    },
    {
      name: "Software Developer",
      icon: "ant-design:code-filled",
      description:`Experienced software developer skilled in both dynamic and static programming.`,
      tags: ["JavaScript", "TypeScript", "Python"],
    },
    {
      name: "Front-end Developer",
      icon: "ri:computer-fill",
      description: `Over ${handleExpirienceYear(
        2021
      )} years crafting dynamic web apps with modern UI frameworks.`,
      tags: ["HTML", "CSS", "React JS", "Next JS"],
    },
    {
      name: "Back-end Developer",
      icon: "streamline:database-server-2-solid",
      description: `Over ${handleExpirienceYear(
        2023
      )} years of experience developing robust and scalable web backends with various databases.`,
      tags: ["Node Js", "Express JS", "Nest JS"],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-28 w-full">
      <SectionTitles title={"Skills"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between gap-4 border border-slate-700 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow hover:border-orange-400 duration-300 transition-shadow p-6 rounded-xl font-mono h-full min-h-[220px]"
            aria-label={skill.name}
          >
            <div className="flex gap-3 items-center mb-2">
              <span>
                <Icon
                  icon={skill.icon}
                  width="44"
                  height="44"
                  className="text-orange-400 drop-shadow"
                  aria-label={skill.name + ' icon'}
                />
              </span>
              <span className="text-2xl font-bold text-wrap text-white">{skill.name}</span>
            </div>
            <p className="text-base text-gray-300 leading-relaxed">{skill.description}</p>
            <div>
              <ul className="flex flex-wrap gap-2 mt-3">
                {skill.tags.map((tag, tagIdx) => (
                  <li
                    key={tagIdx}
                    className="px-3 py-2 rounded-full border border-orange-400 bg-gray-800 text-orange-300 text-xs font-medium shadow hover:scale-105 hover:bg-orange-400 hover:text-white transition-all duration-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
