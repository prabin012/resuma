import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
  return (
    <div className="w-full flex justify-center sm:px-6 md:px-10 mt-5">
      <section className="w-full max-w-screen-xl stats-bg bg-center bg-cover p-6 sm:p-10  lg:p-16 border border-green-900 rounded-lg mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8 md:gap-10 text-center text-gray-800 dark:text-white">
          <div className="text-left ">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              GitHub contributions & stats
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Here's an overview of my GitHub activity, including contribution
              heatmaps, commit streak, and project involvement.
            </p>
          </div>
          <div className="border dark:bg-[#1f1f28] border-green-900 p-4 rounded-lg shadow-md">
            <GitHubCalendar
              username="iprabin01"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              colorScheme="dark"
              style={{ width: "100vh" }}
            />
          </div>
          {/* <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=iprabin01&area=true&hide_border=true&color=4ade80&line=4ade80&point=d1d5db&area_color=d1d5db&bg_color=0d1117"
            alt="GitHub Activity Graph"
            className="mx-auto rounded-lg"
          /> */}
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=iprabin01&area=true&hide_border=true&color=4ade80&line=4ade80&point=d1d5db&area_color=d1d5db&bg_color=1f1f28"
            alt="GitHub Activity Graph"
            className="mx-auto rounded-lg dark:bg-[#1f1f28]"
          />
        </div>
      </section>
    </div>
  );
};

export default GithubStats;
