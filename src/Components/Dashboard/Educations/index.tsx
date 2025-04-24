import React, { useState } from "react";

interface Entry {
  years: string;
  title: string;
  description: string;
}

const EducationResearch = () => {
  const [education, setEducation] = useState<Entry[]>([
    {
      years: "2020-2024",
      title: "Jain Deemed to-be University Bengaluru, Indai",
      description: "Bachelor's Degree in Computer Science",
    },
    {
      years: "2017-2020",
      title: "Nasa National Secondary School Kathmandu, Nepal",
      description: "Computer Science (PCM) +2",
    },
    {
      years: "2017",
      title: "Shree Ram Secondary School Matihani, Mohattori",
      description: "10",
    },
  ]);

  const [research, setResearch] = useState<Entry[]>([
    {
      years: "2023-2024",
      title: "Online Voting System Using Blockchain Technology",
      description:
        "Pioneering research leveraging blockchain technology to revolutionize digital voting systems, ensuring unprecedented security and transparency through decentralized architecture",
    },
    {
      years: "2022-2013",
      title: "Shipment tracking system using blockchain technology ",
      description:
        "Studied best practices for designing cloud-native applications.",
    },
  ]);

  const handleInputChange = (
    list: Entry[],
    setList: React.Dispatch<React.SetStateAction<Entry[]>>,
    index: number,
    field: keyof Entry,
    value: string
  ) => {
    const updated = [...list];
    updated[index][field] = value;
    setList(updated);
  };

  const addNewEntry = (
    setList: React.Dispatch<React.SetStateAction<Entry[]>>,
    list: Entry[]
  ) => {
    setList([...list, { years: "", title: "", description: "" }]);
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-screen-xl text-white">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Education Section */}
          <div className="flex-1 dark:bg-[#1f1f28] p-5 text-left border border-green-900 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            <div className="space-y-6 text-left">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-green-900 rounded-full"></div>
                  {index !== education.length - 1 && (
                    <div className="absolute left-[7px] top-4 h-[calc(100%-16px)] w-0.5 bg-gray-600"></div>
                  )}
                  <input
                    type="text"
                    value={item.years}
                    onChange={(e) =>
                      handleInputChange(
                        education,
                        setEducation,
                        index,
                        "years",
                        e.target.value
                      )
                    }
                    className="bg-transparent border-b border-gray-600 text-white mb-1 w-full"
                  />
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) =>
                      handleInputChange(
                        education,
                        setEducation,
                        index,
                        "title",
                        e.target.value
                      )
                    }
                    className="bg-transparent border-b border-gray-600 text-white mb-1 w-full"
                  />
                  <textarea
                    value={item.description}
                    onChange={(e) =>
                      handleInputChange(
                        education,
                        setEducation,
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    className="bg-transparent border border-gray-600 text-white w-full"
                  />
                </div>
              ))}
              <button
                onClick={() => addNewEntry(setEducation, education)}
                className="mt-4 px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white"
              >
                + Add Education
              </button>
            </div>
          </div>

          {/* Research Section */}
          <div className="flex-1 dark:bg-[#1f1f28] p-5 text-left border border-green-900 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Researched</h2>
            <div className="space-y-6">
              {research.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-green-900 rounded-full"></div>
                  {index !== research.length - 1 && (
                    <div className="absolute left-[7px] top-4 h-[calc(100%-16px)] w-0.5 bg-gray-600"></div>
                  )}
                  <input
                    type="text"
                    value={item.years}
                    onChange={(e) =>
                      handleInputChange(
                        research,
                        setResearch,
                        index,
                        "years",
                        e.target.value
                      )
                    }
                    className="bg-transparent border-b border-gray-600 text-white mb-1 w-full"
                  />
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) =>
                      handleInputChange(
                        research,
                        setResearch,
                        index,
                        "title",
                        e.target.value
                      )
                    }
                    className="bg-transparent border-b border-gray-600 text-white mb-1 w-full"
                  />
                  <textarea
                    value={item.description}
                    onChange={(e) =>
                      handleInputChange(
                        research,
                        setResearch,
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    className="bg-transparent border border-gray-600 text-white w-full"
                  />
                </div>
              ))}
              <button
                onClick={() => addNewEntry(setResearch, research)}
                className="mt-4 px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white"
              >
                + Add Research
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationResearch;
