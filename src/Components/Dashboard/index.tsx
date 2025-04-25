import { useState } from "react";
import EditableHeroDashboard from "./About";
import EducationResearch from "./Educations";
import CustomSolutionsEditor from "./Solutions";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <EditableHeroDashboard />;
      case "skills":
        return <div>Skills Section</div>;
      case "education":
        return <EducationResearch />;
      case "projects":
        return <div>Projects Section</div>;
      case "solutions":
        return <CustomSolutionsEditor />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-[#1f1f28] text-gray-800 dark:text-white">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex justify-between items-center p-4 bg-white dark:bg-[#2e2e38] border-b dark:border-gray-700 shadow-md">
          <div className="text-xl font-semibold text-lime-600">
            Prabin Kumar
          </div>
          <aside className="">
            <nav className="gap-3 flex">
              <button
                className={`block w-full text-left px-3 py-2 rounded-md transition hover:bg-lime-100 dark:hover:bg-lime-900 ${
                  activeTab === "about" ? "bg-lime-200 dark:bg-lime-800" : ""
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <button
                className={`block w-full text-left px-3 py-2 rounded-md transition hover:bg-lime-100 dark:hover:bg-lime-900 ${
                  activeTab === "skills" ? "bg-lime-200 dark:bg-lime-800" : ""
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
              <button
                className={`block w-full text-left px-3 py-2 rounded-md transition hover:bg-lime-100 dark:hover:bg-lime-900 ${
                  activeTab === "education"
                    ? "bg-lime-200 dark:bg-lime-800"
                    : ""
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
              <button
                className={`block w-full text-left px-3 py-2 rounded-md transition hover:bg-lime-100 dark:hover:bg-lime-900 ${
                  activeTab === "projects" ? "bg-lime-200 dark:bg-lime-800" : ""
                }`}
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </button>
              <button
                className={`block w-full text-left px-3 py-2 rounded-md transition hover:bg-lime-100 dark:hover:bg-lime-900 ${
                  activeTab === "projects" ? "bg-lime-200 dark:bg-lime-800" : ""
                }`}
                onClick={() => setActiveTab("solutions")}
              >
                Solutions
              </button>
            </nav>
          </aside>
          <div className="space-x-4">
            <button className="text-gray-600 dark:text-gray-300 hover:text-lime-500 transition">
              Home
            </button>
            <button className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition">
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
