const stats = [
  {
    icon: "ri-focus-2-line",
    value: "1+",
    label: "Year Experience",
  },
  {
    icon: "ri-computer-line",
    value: "25+",
    label: "Projects Completed",
  },
  {
    icon: "ri-heart-line",
    value: "4+",
    label: "Worked Clients",
  },
  {
    icon: "ri-award-line",
    value: "10+",
    label: "Awards Certificates",
  },
];

const StatsSection = () => {
  return (
    <div className="w-screen flex justify-center mt-5">
      <section className="stats-bg bg-center bg-cover p-10 md:p-16 border border-green-900 rounded-lg w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center text-gray-800 dark:text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <i className={`${stat.icon} text-3xl text-green-600`} />
              <h3 className="text-3xl font-bold text-black dark:text-white">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
