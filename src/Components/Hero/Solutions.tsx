const CustomSolutions = () => {
  const services = [
    {
      iconClass: "ri-window-fill",
      title: "Full-Stack Web Development",
      description:
        "Building seamless and responsive web applications using React.js, Next.js, and Node.js.",
      highlight: "React.js, Next.js, and Node.js",
    },
    {
      iconClass: "ri-database-2-fill",
      title: "Scalable Database Solutions",
      description:
        "Designing and managing scalable databases using MongoDB, PostgreSQL, and cloud-based services.",
      highlight: "MongoDB, PostgreSQL",
    },
    {
      iconClass: "ri-links-fill",
      title: "API Architecture & Integration",
      description:
        "Developing secure and scalable RESTful APIs using Express.js and integrating with third-party services.",
      highlight: "RESTful APIs using Express.js",
    },
    {
      iconClass: "ri-speed-up-fill",
      title: "Performance & Optimization",
      description:
        "Optimizing front-end performance, lazy loading, code splitting, and reducing bundle size for faster UX.",
      highlight: "performance, lazy loading, code splitting",
    },
    {
      iconClass: "ri-store-3-fill",
      title: "E-commerce Platform Development",
      description:
        "Developing custom, secure, and user-friendly online stores with integrated payments and dashboards.",
      highlight: "secure online stores with integrated payments",
    },
    {
      iconClass: "ri-brain-fill",
      title: "AI-Powered Enhancements",
      description:
        "Bringing smart solutions with AI tools to automate tasks, boost UX, and personalize user interaction.",
      highlight: "AI tools to automate tasks",
    },
  ];

  return (
    <div className="w-full flex justify-center mt-5">
      <div className=" w-full max-w-screen-xl  dark:bg-[#1f1f28] text-white p-10 border border-green-900 rounded-md  ">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h2 className="text-green-500 text-sm font-semibold mb-2">
            Cooperation
          </h2>
          <h1 className="text-4xl font-bold">
            Designing solutions<span className="text-gray-500">customized</span>{" "}
            to meet your requirements
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="dark:bg-[#1f1f28] border border-gray-700 p-6 rounded-lg"
            >
              <div className="mb-4">
                <i
                  className={`${service.iconClass} text-gray-400 text-2xl`}
                ></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">
                {service.description.split(service.highlight)[0]}
                <span className="text-pink-500">{service.highlight}</span>
                {service.description.split(service.highlight)[1]}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="text-center">
          <p className="text-gray-400">
            Eager to take on new projects and collaborate.
            <br />
            Let’s chat about your ideas.{" "}
            <span className="text-green-500">Reach out!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomSolutions;
