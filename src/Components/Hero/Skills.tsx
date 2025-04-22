const MySkills = () => {
  const skillCategories = [
    {
      category: "Front-End",
      skills:
        "HTML, CSS, JavaScript, React, Tailwind, Apollo client, TypesSript, Redux",
    },
    { category: "Back-End", skills: "Node.js, Express, GraphQL" },
    { category: "Databases", skills: "MySQL, MongoDB" },
    { category: "Tools & Platforms", skills: "Git, Jira" },
    {
      category: "Others",
      skills: "RESTful APIs, GraphQL, Agile Methodologies",
    },
  ];

  return (
    <div className="w-full flex justify-center mt-5">
      <div className="w-full max-w-screen-xl relative dark:bg-[#1f1f28] border border-green-900 rounded-lg overflow-hidden text-white p-10">
        <div className="mb-10 text-left">
          <h2 className="text-green-500 text-sm font-semibold mb-2">
            Projects
          </h2>
          <h1 className="text-4xl font-bold">My Skills</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Skill Icons */}
          {/* <div className="flex-1">
            <div className="grid grid-cols-3 gap-6">
              {skillIcons.map((icon, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={icon}
                    alt={`Skill ${index + 1}`}
                    className="w-12 h-12"
                  />
                </div>
              ))}
            </div>
          </div> */}
          <div className="col-span-1 w-6/6 z-50 md:w-2/6 flex gap-5 flex-col">
            <div className="">
              <div className="overflow-hidden w-full">
                <div className="marquee flex gap-4 whitespace-nowrap">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="NodeJS"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="TailwindCSS"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                    alt="Next.js"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
                    alt="Firebase"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />

                  {/* Repeat for smooth loop */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="NodeJS"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="TailwindCSS"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                    alt="Next.js"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
                    alt="Firebase"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="overflow-hidden w-full">
                <div className="marquee-1f flex gap-4 whitespace-nowrap">
                  <img
                    src="https://simpleicons.org/icons/react.svg"
                    alt="NodeJS"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://simpleicons.org/icons/nextdotjs.svg"
                    alt="TailwindCSS"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://simpleicons.org/icons/firebase.svg"
                    alt="Next.js"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://simpleicons.org/icons/flutter.svg"
                    alt="Firebase"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://simpleicons.org/icons/angular.svg"
                    alt="React"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />

                  {/* Repeat for smooth loop */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="NodeJS"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="TailwindCSS"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                    alt="Next.js"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
                    alt="Firebase"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="overflow-hidden w-full">
                <div className="marquee flex gap-4 whitespace-nowrap">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="NodeJS"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="TailwindCSS"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                    alt="Next.js"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
                    alt="Firebase"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />

                  {/* Repeat for smooth loop */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="NodeJS"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="TailwindCSS"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
                    alt="Next.js"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
                    alt="Firebase"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React"
                    className="w-10 h-10 border border-gray-700 p-2 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border  border-green-900"></div>

          {/* Skill Categories */}
          <div className="flex-1">
            <ul className="space-y-4 text-left">
              {skillCategories.map((item, index) => (
                <li key={index} className="text-gray-400">
                  <span className="text-white">• {item.category}:</span>{" "}
                  {item.skills}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-end z-20 absolute opacity-20 -right-8 -top-8">
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
  );
};

export default MySkills;
