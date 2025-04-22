const TrustedCompanies = () => {
  const journalEntries = [
    {
      date: "April 2025",
      title:
        "Refactored reusable components and improved performance in Ghum Nepal project",
    },
    {
      date: "March 2025",
      title:
        "Integrated host insight dashboard with date-based filtering and optimized mobile views",
    },
    {
      date: "February 2025",
      title:
        "Fixed booking price mismatch bug and improved image upload in property listing",
    },
    {
      date: "January 2025",
      title:
        "Worked on dynamic document verification system and added edit/delete flow before submission",
    },
    {
      date: "December 2024",
      title:
        "Developed room finder architecture with dynamic search and location-based filtering",
    },
  ];

  return (
    <div className="w-screen flex justify-center mt-10">
      <div className=" w-7xl   text-white flex">
        <div className="flex-1 dark:bg-[#1f1f28] border  border-green-900 rounded-md   ">
          <div className="mb-10 text-left px-10 pt-10">
            <h2 className="text-green-500 text-sm font-semibold mb-2">
              <i className="ri-circle-fill text-[6px]"></i> Cooperation
            </h2>
            <h1 className="text-4xl font-bold">
              Earned the trust of{" "}
              <span className="text-green-500">4+ clients</span> in just two
              year
            </h1>

            <hr className="border-gray-600 w-20 mt-4" />
          </div>

          <div className="border w-3xl  overflow-hidden gap-4 rounded-md border-gray-600 m-20 p-5">
            <div className="marquee2 w-3xl">
              <div className="flex  gap-4 whitespace-nowrap">
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  React.js
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Next.js
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Tailwind CSS
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  TypeScript
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Responsive Design
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  UI/UX Focused
                </span>

                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Next.js
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Tailwind CSS
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  TypeScript
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Responsive Design
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  UI/UX Focused
                </span>

                {/* Repeat for smooth loop */}
              </div>
            </div>
            <div className="marquee-right   mt-5">
              <div className="flex gap-4  whitespace-nowrap">
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  JavaScript (ES6+)
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Redux Toolkit
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  RESTful APIs
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Material UI
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Git & GitHub
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Performance Optimization
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Redux Toolkit
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  RESTful APIs
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Material UI
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Git & GitHub
                </span>
                <span className="border border-gray-700 px-2 flex justify-center items-center rounded-md">
                  Performance Optimization
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center relative space-x-4 overflow-hidden px-10 pb-10">
            <div className="p-5 rounded-full border border-green-900">
              <div className="p-5 rounded-full border border-green-900">
                <img
                  src="/images/1.png"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
              </div>
            </div>
            <div>
              <span className="flex">
                <p className="text-gray-400">Web </p>
                <p className="text-white">prabinmahato.com.np</p>
              </span>
              <span className="flex">
                <p className="text-gray-400">Phone</p>
                <p className="text-white">+977-9808676092</p>
              </span>
              <span className="flex">
                <p className="text-gray-400">Email</p>
                <p className="text-white">prabinmahato415@gmail.com</p>
              </span>
            </div>
            <div className="flex-1 flex justify-end absolute -right-10 -bottom-10">
              <div className="p-10 rounded-full border border-green-500">
                <div className="p-7 rounded-full border border-green-500 rotate-middle-circle">
                  <p className="absolute border p-1 top-0 rounded-full bg-green-900"></p>
                  <div className="p-5 relative rounded-full border border-green-500 rotate-middle-circle-right">
                    <p className="absolute border -top-1 p-1 rounded-full bg-green-900"></p>
                    <div className="p-2 rounded-full border border-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 dark:bg-[#1f1f28] p-5 text-left border border-green-900 rounded-md ml-5">
          <h3 className="text-2xl font-semibold mb-6">Git Journaling</h3>
          <div className="space-y-6">
            {journalEntries.map((entry, index) => (
              <div key={index} className="relative pl-8">
                {/* Timeline Dot and Line */}
                <div className="absolute left-0 top-0 w-3 h-3 bg-green-900 rounded-full"></div>
                {index !== journalEntries.length - 1 && (
                  <div className="absolute left-[7px] top-4 h-[calc(100%-16px)] w-0.5 bg-gray-600"></div>
                )}
                {/* Content */}
                <p className="text-gray-400 text-xs">{entry.date}</p>
                <h4 className="text-sm font-semibold text-gray-300">
                  {entry.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
