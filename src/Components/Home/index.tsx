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

const HomeLayout = () => {
  return (
    <div className="dark:bg-[#1f1f26] w-screen pt-10 bodyImage">
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
    </div>
  );
};

export default HomeLayout;
