import React from "react";
import SectionTitles from "./sectionTitles";
import { Icon } from "@iconify/react/dist/iconify.js";

const AboutMe = () => {
  const handleExpirienceYear = (year: number) => {
    return new Date().getFullYear() - year;
  };
  return (
    <div
      className="mt-4 lg:mt-12 lg:h-screen 2xl:h-full scroll-mt-28"
      id="about"
    >
      <SectionTitles title={"About ME"} />
      <p className="leading-loose">
        I am a software developer and quality assurance professional with{" "}
        <span className="font-semibold">
          {" "}
          <span className="text-xl">{handleExpirienceYear(2021)}</span>
          <span className="relative -left-0 -top-2">+</span> years
        </span>{" "}
        years of experience in software development and testing. Skilled in
        engineering scalable server-side applications, designing user-centric
        interfaces, and ensuring software quality through rigorous testing and
        process improvement. My focus on user privacy, performance optimization,
        and defect prevention has consistently enhanced system reliability and
        user satisfaction. I am passionate about combining software engineering
        expertise with strong QA practices to deliver high-performing, secure,
        and user-friendly products. Eager to contribute to a dynamic team where
        innovation, quality, and continuous improvement drive success.
      </p>

      <a href="/Wilbrord_QA.pdf" download={"Wilbrord_QA.pdf"}>
        <button className="group inline-flex mt-4 px-2 py-2 border rounded-xl text-base hover:border-orange-400">
          Download CV
          <Icon
            icon="material-symbols-light:download"
            width="25"
            height="25"
            className=" opacity-0 group-hover:opacity-100"
          />
        </button>
      </a>
    </div>
  );
};

export default AboutMe;
