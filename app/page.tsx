import Image from "next/image";
import AsidePage from "./component/aside";
import AboutMe from "./component/about";
import Skills from "./component/skills";
import Experience from "./component/experience";
import Work from "./component/work";
import Contact from "./component/contact";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 md:gap-8 px-4 md:px-12 ">
      <AsidePage />
      <div className="lg:w-2/3  flex flex-col gap-24 py-24">
        <AboutMe />
        <Skills/>
        <Experience/>
        <Work/>
        {/* <Contact/> */}
      </div>
    </main>
  );
}
