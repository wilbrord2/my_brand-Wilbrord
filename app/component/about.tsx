import React from "react";
import SectionTitles from "./sectionTitles";
import { Icon } from "@iconify/react/dist/iconify.js";

const AboutMe = () => {
  const handleExpirienceYear = (year: number) => {
    return new Date().getFullYear() - year;
  };
  return (
    <div className="mt-12 max-2xl:h-screen scroll-mt-28" id="about">
      <SectionTitles title={"About ME"} />
      <p className="leading-loose">
        I am a highly skilled software developer with <span className="font-semibold"> <span className="text-xl">{handleExpirienceYear(2020)}</span><span className="relative -left-0 -top-2">+</span> years</span> of experience  in
        software development, known for my ability to engineer scalable
        server-side applications and design user-centric UIs. My dedication to
        continuous improvement and prioritizing user privacy has consistently
        enhanced application performance and reliability. I am eager to bring my
        proven software development and management expertise to a dynamic team,
        driving impactful projects and innovative solutions. Let's connect and
        explore how my skills can contribute to your company's success.
      </p>
      
      <a href="/public/Wilbrord_SDR.pdf" download={'Wilbrord_SDR.pdf'}>
      <button className="group inline-flex mt-4 px-2 py-2 border rounded-xl text-base hover:border-orange-400">
        Download CV
        <Icon icon="material-symbols-light:download" width="25" height="25" className=" opacity-0 group-hover:opacity-100"/>
        </button>
        </a>
      
    </div>
  );
};

export default AboutMe;
