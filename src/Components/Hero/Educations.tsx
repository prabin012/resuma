const EducationResearch = () => {
  const education = [
    {
      years: "2020-2024",
      title: "MIT",
      description: "Bachelor's Degree in Computer Science",
    },
    {
      years: "2018-2019",
      title: "Harvard University",
      description: "Certification in React and Redux, Node.js Developer Course",
    },
    {
      years: "2015-2016",
      title: "Stanford University",
      description: "Certification in Full Stack Web Development",
    },
    {
      years: "2013-2015",
      title: "University of Washington",
      description: "Certification in React and Redux, Node.js Developer Course",
    },
  ];

  const research = [
    {
      years: "2023-2024",
      title: "Advanced Data Analytics with Big Data Tools",
      description:
        "Utilized big data tools for advanced analytics and insights.",
    },
    {
      years: "2021-2013",
      title: "Cloud-Native Application Architectures",
      description:
        "Studied best practices for designing cloud-native applications.",
    },
    {
      years: "2019-2020",
      title: "AI-Driven User Experience Personalization",
      description:
        "Leveraged AI to personalize user experiences based on behavior.",
    },
  ];

  return (
    <div className="w-screen flex justify-center mt-10">
      <div className="w-7xl  text-white ">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Education Section */}
          <div className="flex-1 dark:bg-[#1f1f28] p-5 text-left border border-green-900 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            <div className="space-y-6 text-left">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline Dot and Line */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-green-900 rounded-full"></div>
                  {index !== education.length - 1 && (
                    <div className="absolute left-[7px] top-4 h-[calc(100%-16px)] w-0.5 bg-gray-600"></div>
                  )}
                  {/* Content */}
                  <p className="text-gray-400 text-sm">{item.years}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Researched Section */}
          <div className="flex-1 dark:bg-[#1f1f28] p-5 text-left border border-green-900 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Researched</h2>
            <div className="space-y-6">
              {research.map((item, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline Dot and Line */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-green-900 rounded-full"></div>
                  {index !== research.length - 1 && (
                    <div className="absolute left-[7px] top-4 h-[calc(100%-16px)] w-0.5 bg-gray-600"></div>
                  )}
                  {/* Content */}
                  <p className="text-gray-400 text-sm">{item.years}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationResearch;
