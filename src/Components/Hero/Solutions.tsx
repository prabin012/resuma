const CustomSolutions = () => {
  const services = [
    {
      iconClass: "ri-window-fill",
      title: "Web & App Development",
      description:
        "Crafting visually appealing and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Angular.",
      highlight:
        "HTML, CSS, JavaScript, and modern frameworks like React and Angular",
    },
    {
      iconClass: "ri-database-fill",
      title: "Database Management",
      description:
        "Designing and managing databases such as MySQL, PostgreSQL, and MongoDB.",
      highlight: "MySQL, PostgreSQL, and MongoDB",
    },
    {
      iconClass: "ri-cloud-fill",
      title: "API Development",
      description:
        "Creating and integrating RESTful APIs to enable smooth interaction between front-end and back-end systems.",
      highlight: "RESTful APIs",
    },
    {
      iconClass: "ri-speed-fill",
      title: "Performance Optimization",
      description:
        "Improving the speed and performance of web applications to provide a better user experience. Work with NodeJS, Express.",
      highlight: "NodeJS, Express",
    },
    {
      iconClass: "ri-shopping-cart-fill",
      title: "E-commerce Solutions",
      description:
        "Developing scalable and secure payment solutions for e-commerce platforms tailored to your business needs.",
      highlight: "payment solutions",
    },
    {
      iconClass: "ri-robot-fill",
      title: "Integrating AI",
      description:
        "Boost your applications with AI for improved efficiency, automation, and enhanced user experience.",
      highlight: "AI",
    },
  ];

  return (
    <div className="w-screen flex justify-center mt-5">
      <div className="w-7xl dark:bg-[#1f1f28] text-white p-10 border border-green-900 rounded-md  ">
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
