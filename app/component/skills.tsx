import React from "react";
import SectionTitles from "./sectionTitles";
import { Icon } from "@iconify/react/dist/iconify.js";

const Skills = () => {
  const handleExpirienceYear = (year: number) => {
    return new Date().getFullYear() - year;
  };

  return (
    <div id="skills" className="scroll-mt-28 ">
      <SectionTitles title={"Skills"} />

      <div className="flex items-center flex-wrap gap-4 py-4 cursor-pointer">
        <div className="group flex flex-col gap-2 border p-4 border-slate-500 hover:border-orange-400 w-fit rounded-lg font-mono">
          <div className="flex gap-2 items-center">
            <span>
              <Icon
                icon="ant-design:code-filled"
                width="40"
                height="40"
                className="text-orange-400"
              />
            </span>
            <span className="text-2xl font-bold text-wrap">
              Software Developer
            </span>
          </div>
          <div>
            <p className="text-sm text-wrap">
              Experienced software developer <br /> skilled in both dynamic{" "}
              <br /> and static programming.
            </p>
            <div className="opacity-0 group-hover:opacity-100 flex duration-300 mt-2 gap-2 ">
              <span className="px-2 py-[4px] rounded-lg border-slate-400 border hover:scale-105 hover:border-orange-400">
                JavaScript
              </span>
              <span className="px-2 py-[4px] rounded-lg border-slate-400 border hover:scale-105 hover:border-orange-400">
                TypeScript
              </span>
              <span className="px-2 py-[4px] rounded-lg border-slate-400 border hover:scale-105 hover:border-orange-400">
                Python
              </span>
            </div>
          </div>
        </div>
        <div className="group flex flex-col gap-2 border p-4 border-slate-500 hover:border-orange-400 w-fit rounded-lg font-mono">
          <div className="flex gap-2 items-center">
            <span>
              <Icon
                icon="ri:computer-fill"
                width="40"
                height="40"
                className="text-orange-400"
              />
            </span>
            <span className="text-2xl font-bold text-wrap">
              Front-end Developer
            </span>
          </div>
          <div>
            <p className="text-sm text-wrap">
              Over {handleExpirienceYear(2019)} years crafting dynamic <br />
              web apps with and modern <br /> UI frameworks.
            </p>
            <div className="opacity-0 group-hover:opacity-100 flex mt-2 gap-2 ">
              <span className="px-2 py-[4px] rounded-lg border-slate-400 border hover:scale-105 hover:border-orange-400">
                HTML
              </span>
              <span className="px-2 py-[4px] rounded-lg border-slate-400 border hover:scale-105 hover:border-orange-400">
                CSS
              </span>
              <span className="px-2 py-[4px] rounded-lg border-slate-400 border hover:scale-105 hover:border-orange-400">
                React JS
              </span>
              <span className="px-2 py-[4px] rounded-lg border-slate-400 border hover:scale-105 hover:border-orange-400">
                Next JS
              </span>
            </div>
          </div>
        </div>
        <div className="group flex flex-col gap-2 border p-4 border-slate-500 hover:border-orange-400 w-fit rounded-lg font-mono">
          <div className="flex gap-2 items-center">
            <span>
              <Icon
                icon="streamline:database-server-2-solid"
                width="40"
                height="40"
                className="text-orange-400"
              />
            </span>
            <span className="text-2xl font-bold text-wrap">
              Back-end Developer
            </span>
          </div>
          <div>
            <p className="text-sm text-wrap">
              Over {handleExpirienceYear(2020)} years of experience <br />{" "}
              developing robust and scalable <br /> web backends with various
              databases.
            </p>
            <div className="opacity-0 group-hover:opacity-100 flex mt-2 gap-2 ">
              <span className="px-2 py-[4px] rounded-lg border-slate-400 border hover:scale-105 hover:border-orange-400">
                Node Js
              </span>
              <span className="px-2 py-[4px] rounded-lg border-slate-400 border hover:scale-105 hover:border-orange-400">
                Express JS
              </span>
              <span className="px-2 py-[4px] rounded-lg border-slate-400 border hover:scale-105 hover:border-orange-400">
                Nest JS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
