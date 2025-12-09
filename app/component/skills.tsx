import React from "react";
import SectionTitles from "./sectionTitles";
import { Icon } from "@iconify/react/dist/iconify.js";

const Skills = () => {
  const handleExpirienceYear = (year: number) => {
    return new Date().getFullYear() - year;
  };

  // Array of skill objects
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
    <div id="skills" className="scroll-mt-28 ">
      <SectionTitles title={"Skills"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch justify-stretch gap-4 py-4 cursor-pointer">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between gap-2 border p-4 border-slate-500 hover:border-orange-400 w-fit rounded-lg font-mono"
          >
            <div className="flex gap-2 items-center">
              <span>
                <Icon
                  icon={skill.icon}
                  width="40"
                  height="40"
                  className="text-orange-400"
                />
              </span>
              <span className="text-2xl font-bold text-wrap">{skill.name}</span>
            </div>
            <p className="text-sm text-wrap">{skill.description}</p>
            <div>
              <div className="opacity-0 group-hover:opacity-100 flex duration-300 mt-2 gap-2 ">
                {skill.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2 py-[4px] rounded-lg border-slate-400 border hover:scale-105 hover:border-orange-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
