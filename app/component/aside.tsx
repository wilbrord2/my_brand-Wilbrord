import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

const AsidePage = () => {
  return (
    <div className="relative lg:sticky py-20 lg:top-0 w-full lg:w-1/2 xl:w-1/3 lg:max-h-screen flex flex-col gap-4 text-start ">
      <div className="flex flex-col gap-4 text-start ">
        <h2>Hi👋, I am</h2>
        <h1 className="text-4xl font-bold ">
          Wilbrord <span className="text-orange-400">Ibyimana</span>
        </h1>
        <h2 className="font-semibold text-lg">
          <span className="text-orange-400">Software</span> Developer
        </h2>
        <ul className="hidden lg:flex w-fit flex-col gap-4 text-sm italic text-gray-500 font-semibold">
          <Link href={"#about"}>
            <li className="group flex items-center gap-4 cursor-pointer ">
              <span className="w-10 group-hover:w-16 group-hover:transition-all duration-1000 group-hover:text-orange-400 h-[1px] group-hover:bg-orange-400 bg-gray-500 inline-block"></span>
              <span className="group-hover:text-orange-400">About</span>
            </li>
          </Link>
          <Link href={"#skills"}>
            <li className="group flex items-center gap-4 cursor-pointer ">
              <span className="w-10 group-hover:w-16 group-hover:transition-all duration-1000 group-hover:text-orange-400 h-[1px] group-hover:bg-orange-400 bg-gray-500 inline-block"></span>
              <span className="group-hover:text-orange-400">Skills</span>
            </li>
          </Link>
          <Link href={"#expirience"}>
            <li className="group flex items-center gap-4 cursor-pointer ">
              <span className="w-10 group-hover:w-16 group-hover:transition-all duration-1000 group-hover:text-orange-400 h-[1px] group-hover:bg-orange-400 bg-gray-500 inline-block"></span>
              <span className="group-hover:text-orange-400">Expirience</span>
            </li>
          </Link>
          <Link href={"#projects"}>
            <li className="group flex items-center gap-4 cursor-pointer ">
              <span className="w-10 group-hover:w-16 group-hover:transition-all duration-1000 group-hover:text-orange-400 h-[1px] group-hover:bg-orange-400 bg-gray-500 inline-block"></span>
              <span className="group-hover:text-orange-400">Projects</span>
            </li>
          </Link>
          {/* <Link href={"#contact"}>
            <li className="group flex items-center gap-4 cursor-pointer ">
              <span className="w-10 group-hover:w-16 group-hover:transition-all duration-1000 group-hover:text-orange-400 h-[1px] group-hover:bg-orange-400 bg-gray-500 inline-block"></span>
              <span className="group-hover:text-orange-400">Contact ME</span>
            </li>
          </Link> */}
        </ul>
      </div>
      <div className="lg:mt-10">
        <div className="text-orange-400">Cantact Me</div>
        <div className="flex items-center gap-4 mt-3">
          <a href="https://github.com/wilbrord2" target="_blank">
            <Icon
              icon="mdi:github"
              width="30"
              height="30"
              className="text-gray-500 hover:text-orange-400 duration-200 cursor-pointer"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/wilbrord-ibyimana-120935221/"
            target="_blank"
          >
            <Icon
              icon="entypo-social:linkedin-with-circle"
              width="30"
              height="30"
              className="text-gray-500 hover:text-orange-400 duration-200 cursor-pointer"
            />
          </a>
          <a href="https://www.instagram.com/k_wilbrord" target="_blank">
            <Icon
              icon="ant-design:instagram-filled"
              width="30"
              height="30"
              className="text-gray-500 hover:text-orange-400 duration-200 cursor-pointer"
            />
          </a>
          <a
            href="mailto:bwilbrord@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon
              icon="mdi:gmail"
              width="30"
              height="30"
              className="text-gray-500 hover:text-orange-400 duration-200 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AsidePage;
