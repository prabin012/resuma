import { Outlet } from "react-router-dom";
// import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../Hero/About";
import StatsSection from "../Hero/Statistic";
import TrustedCompanies from "../Hero/Testmonial";
import CustomSolutions from "../Hero/Solutions";
import Experience from "../Hero/Experiance";
import EducationResearch from "../Hero/Educations";
import MySkills from "../Hero/Skills";
import LetsConnect from "../Hero/Connect";
import Footer from "../Footer/Footer";
import WorkedWith from "../Hero/Work";
import GithubStats from "../Hero/GithubStats";

const HomeLayout = () => {
  const scrollToElement = (href: string) => {
    console.log(href);
    const element = document.querySelector(`#${href}`);
    console.log(element);
    if (element) {
      const offset = (element as HTMLElement).offsetTop - 130;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };
  const handleClick = (item: string) => {
    console.log(item);
    scrollToElement(item);
  };
  return (
    <div className="dark:bg-[#1f1f26] overflow-x-hidden max-w-screen pt-10 bodyImage">
      <Navbar />
      <Outlet />
      <div id="introduction">
        <HeroSection />
      </div>
      <div id="portfolio">
        <StatsSection />
      </div>
      <TrustedCompanies />
      <CustomSolutions />
      <GithubStats />
      <Experience />
      <div id="education">
        <EducationResearch />
      </div>
      <div id="experience">
        <WorkedWith />
      </div>
      <div id="expertise">
        <MySkills />
      </div>
      <div id="contact">
        <LetsConnect />
      </div>
      <Footer />
      <div
        className=" text-center flex cursor-pointer  z-50 justify-center items-center w-10 fixed bottom-10 right-5 "
        onClick={() => handleClick("introduction")}
      >
        <span>
          <span>
            <i className="ri-arrow-up-box-fill text-4xl text-green-500"></i>
          </span>
        </span>
      </div>
    </div>
  );
};

export default HomeLayout;
