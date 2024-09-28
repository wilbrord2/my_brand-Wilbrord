import React from "react";

const SectionTitles = ({title}:{title:string}) => {
  return (
    <div className="group flex flex-col font-bold text-2xl uppercase pb-2 w-fit mb-6">
      <span className="group-hover:text-orange-600 text-orange-400">
       {title}
      </span>
      <span
        className="w-0 h-1 group-hover:w-20 group-hover:border-b-2  
          group-hover:border-orange-600 group-hover:duration-150 group-hover:transition-all block"
      ></span>
    </div>
  );
};

export default SectionTitles;
