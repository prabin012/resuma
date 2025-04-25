import { useState } from "react";

interface Service {
  iconClass: string;
  title: string;
  description: string;
  highlight: string;
}

const CustomSolutionsEditor = () => {
  const [services, setServices] = useState<Service[]>([
    {
      iconClass: "ri-window-fill",
      title: "Full-Stack Web Development",
      description:
        "Building seamless and responsive web applications using React.js, Next.js, and Node.js.",
      highlight: "React.js, Next.js, and Node.js",
    },
  ]);

  const handleInputChange = (
    index: number,
    field: keyof Service,
    value: string
  ) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const addNewService = () => {
    setServices([
      ...services,
      {
        iconClass: "",
        title: "",
        description: "",
        highlight: "",
      },
    ]);
  };

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-screen-xl dark:bg-[#1f1f28] text-white p-6 border border-green-900 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Custom Solutions Editor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-4 space-y-2"
            >
              <input
                type="text"
                placeholder="Icon Class"
                value={service.iconClass}
                onChange={(e) =>
                  handleInputChange(index, "iconClass", e.target.value)
                }
                className="bg-transparent border-b border-gray-600 w-full"
              />
              <input
                type="text"
                placeholder="Title"
                value={service.title}
                onChange={(e) =>
                  handleInputChange(index, "title", e.target.value)
                }
                className="bg-transparent border-b border-gray-600 w-full"
              />
              <textarea
                placeholder="Description"
                value={service.description}
                onChange={(e) =>
                  handleInputChange(index, "description", e.target.value)
                }
                className="bg-transparent border border-gray-600 w-full"
              />
              <input
                type="text"
                placeholder="Highlight Text"
                value={service.highlight}
                onChange={(e) =>
                  handleInputChange(index, "highlight", e.target.value)
                }
                className="bg-transparent border-b border-gray-600 w-full"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={addNewService}
            className="px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white"
          >
            + Add Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomSolutionsEditor;
