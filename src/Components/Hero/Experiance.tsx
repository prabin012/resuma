const Experience = () => {
  const companies = [
    {
      name: "GhumNepal Innovation Pvt.Ltd",
      years: "2024 - Present",
      logo: "/images/FAVICON_WHITE.png",
      highlight: true,
    },
    {
      name: "Tesla infrastructure Pvt.Ltd",
      years: "2024 - 2024",
      logo: "/images/tesla.png",
    },
    {
      name: "SolutionsPath Pvt.Ltd",
      years: "2023 - 2024",
      logo: "/images/sol.jpg",
    },
    // {
    //   name: "Freelance",
    //   years: "2023 - Present",
    //   logo: "https://via.placeholder.com/30x30?text=P",
    // },
  ];

  const techStack = [
    "React",
    "Javascript",
    "Typescript",
    "Tailwind",
    "Nodejs",
    "Express",
    "MongoDB",
    "GraphQL",
    "HTML5",
    "CSS",
    "Java",
    "Apollo client ",
    "Apollo server ",
    "Redux ",
    "MySql ",
    "Jira",
  ];

  return (
    <div className="w-full flex justify-center mt-5">
      <div className="w-full max-w-screen-xl dark:bg-[#1f1f28] text-white p-10 border border-green-900 rounded-md  ">
        {/* Header Section */}
        <div className="mb-10 text-left">
          <h2 className="text-green-500 text-sm font-semibold mb-2">
            Experience
          </h2>
          <h1 className="text-4xl font-bold">
            +2 years of passion for programming techniques
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Company List */}
          <div className="flex-1">
            {companies.map((company, index) => (
              <div
                key={index}
                className={`flex items-center p-4 mb-4 rounded-lg ${
                  company.highlight ? "bg-green-500/20" : "bg-gray-800"
                }`}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 object-cover h-16 mr-4 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{company.name}</h3>
                  <p className="text-gray-400">{company.years}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Senior Software Engineer Section */}
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              Software Engineer
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                • Led development of scalable web applications, improving
                performance and user experience for millions of users.
              </li>
              <li>
                • Implemented machine learning algorithms to enhance search
                functionality.
              </li>
              <li>
                • Collaborated with cross-functional teams to integrate new
                features seamlessly.
              </li>
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-6">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 text-sm font-semibold px-4 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
