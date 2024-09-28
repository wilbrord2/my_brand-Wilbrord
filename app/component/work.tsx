import React from "react";
import SectionTitles from "./sectionTitles";
import Image from "next/image";

const Work = () => {
  const projects = [
    {
      image: "/website.png",
      title: "Uplus",
      link: "https://uplus.rw/",
      description:
        "Uplus is a digital group financing platform enabling social and economic growth.",
    },
    {
      image: "/dashboad.png",
      title: "Uplus Portal",
      link: "https://portal.uplus.rw/",
      description: "A dashboard for Uplus clients to visualize they data",
    },
    {
      image: "/amigos.png",
      title: "Amigos Shop",
      link: "https://e-comm-team-amigos-fn-staging.netlify.app/",
      description:
        "An e-commerce platfom where buyer and seller made transactions",
    },
    {
      image: "/awesomity.png",
      title: "Mark 8",
      link: "https://mark8-ecommerce.netlify.app/dashboard",
      description:"An e-commerce platfom where you can buy different products",
    },
    {
      image: "/myshop.png",
      title: "Made in rwanda",
      link: "https://mark8-ecommerce.netlify.app/dashboard",
      description:"A platform where you can find different made in rwanda clothes",
    },
  ];
  return (
    <div id="projects" className="scroll-mt-28">
      <SectionTitles title={"Projects"} />
      <div className=" flex flex-wrap gap-4">
        {projects.map((project) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="group border border-gray-700 rounded-lg w-[200px] lg:w-[300px] h-full">
              <div className="relative w-full h-[100px] lg:h-[150px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  objectFit="fill"
                  fill={true}
                  loading="lazy"
                  className="group-hover:scale-105 transition-all duration-300 rounded-t-lg "
                ></Image>
              </div>
              <div className="flex flex-col justify-between items-center gap-2 p-2">
                <div className="flex flex-col gap-2">
                  <span className="group-hover:text-orange-400">{project.title}</span>
                  <span className="text-xs">{project.description}</span>
                </div>
                <div className="w-full text-end">
                  <button className="opacity-0 group-hover:opacity-100 hover:transition-all hover:duration-500 border border-gray-700 text-xs rounded-lg w-fit py-1 px-2">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;
