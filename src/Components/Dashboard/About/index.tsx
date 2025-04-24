import { useState } from "react";

const EditableHeroDashboard = () => {
  const [formData, setFormData] = useState({
    name: "Prabin",
    title: "Junior {Full Stack} Web & App developer",
    description:
      "Full-stack developer experienced in Node.js, React, JavaScript, TypeScript, and MongoDB, building scalable MERN apps with clean UI, API integration, and database management.",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full p-10 grid md:grid-cols-2 gap-8">
      {/* Editable Form */}
      <div className="bg-white dark:bg-[#1f1f28] p-6 rounded-md shadow-md border">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-white">
          Edit About Section
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-2 rounded bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded bg-transparent text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
            ></textarea>
          </div>
        </form>
      </div>

      {/* Live Preview */}
      <div className="min-h-[50vh] p-6 border border-green-900 hover:border-r-green-500 hover:border-b-green-500 rounded-md hover:rounded-xl transition-all duration-500 ease-in-out items-center justify-center bg-white dark:bg-[#1f1f28] text-gray-800 dark:text-white">
        <div className="w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="clip-hex overflow-hidden max-w-[300px] mx-auto">
              <img
                src="/images/p4.png"
                alt="profile"
                className="rounded-full"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-lime-500 text-white p-3 rounded-xl">
              <i className="ri-code-s-slash-line text-2xl"></i>
            </div>
          </div>

          <div className="text-left">
            <p className="text-lg mb-2">
              <strong className="text-green-500">{`<span>`}</strong> Hey, I’m
              <span className="font-semibold"> {formData.name} </span>
              <strong className="text-green-500">{`</span>`}</strong>
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {formData.title}
              <span className="text-lime-500">_</span>
            </h1>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              <span className="font-medium text-black dark:text-white">
                {formData.description}
              </span>
              <br />I deliver web solutions that are both innovative and robust.
            </p>
            <div className="mt-6">
              <a
                href="/images/PrabinResume.pdf"
                download
                className="inline-flex items-center gap-2 font-semibold"
              >
                <i className="ri-download-2-line text-xl text-lime-600" />[
                Download my CV ]
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditableHeroDashboard;
